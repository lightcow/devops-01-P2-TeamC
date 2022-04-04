module.exports = async function (fastify, opts) {
    fastify.put('/', async function (request, reply) {
      return 'this is an example'
    })
  }
  