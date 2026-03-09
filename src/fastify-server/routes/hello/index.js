'use strict'

const hello = `<html>
  <head>
    <style>
     body { background: #333; margin: 1.25rem }
     h1 { color: #EEE; font-family: sans-serif }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

    const { greeting = 'Hello'} = request.query;

    reply.type()
    return reply.view(`hello.hbs`, { greeting });

    //VARIABLE SERVING
    // reply.type('text/html')
    // return hello;

    // STATIC SERVING
    // reply.type('text/html')
    // return reply.sendFile('hello.html');
  });

  // STATIC SERVING
  // fastify.get('/world', async function (request, reply) {
  //   reply.type('text/html')
  //   return hello
  // })
}
