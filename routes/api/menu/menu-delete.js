'use strict'

module.exports = async function (fastify, opts) {
  fastify.delete('/', async function (request, reply) {
    reply.code(200)
    .send('hello world')
  })
}
