'use strict'

const root = `<html>
<head>
  <style>
   body { background: #333; margin: 1.25rem }
   a { color: yellow; font-size: 2rem; font-family: sans-serif }
  </style>
</head>
<body>
  <a href='/hello'>ROOT Hello</a>
</body>
</html>
`

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {

    return reply.view('index.hbs')

    // STATIC SERVING
    // reply.type('text/html')
    // return root;
  })
}
