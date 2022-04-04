'use strict'

module.exports = async function (fastify, opts) {
  fastify.patch('/', async function (request, reply) {
    reply.code(200)
    .send('hello world')
  })
}
