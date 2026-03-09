'use strict'

const path = require('node:path');
const AutoLoad = require('@fastify/autoload');
const dev = process.env.NODE_ENV !== 'production';
const fastifyStatic = dev ? require('@fastify/static') : null;

const pointOfView = require('@fastify/view');
const handlebars = require('handlebars');

const proxy = require('@fastify/http-proxy');

// Pass --options via CLI arguments in command to enable these options.
const options = {}

module.exports = async function (fastify, opts) {

  // proxy
  fastify.register(proxy, {
    upstream: 'https://news.ycombinator.com/',
    prefix: '/proxy/',
    preHandler: async (request, reply) => {
      if (request.query.token !== 'abc') {
        throw fastify.httpErrors.unauthorized()
      }
    }
  })

  // View engine
  fastify.register(pointOfView, {
    engine: { handlebars }, // name of the engine and the engine itself.
    root: path.join(__dirname, 'views'),
    layout: 'layout.hbs'
  })

  //Static content serving
  if (dev) fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/public/'
  });

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

  fastify.setNotFoundHandler((request, reply) => {
    if (request.method !== 'GET') {
      reply.status(405)
      return 'Method Not Allowed\n'
    }
    return 'Not Found\n'
  })
}

module.exports.options = options
