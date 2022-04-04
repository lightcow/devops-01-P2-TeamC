module.exports = async function (fastify, opts) {
    fastify.post('/', async function (request, reply) {
      return 'this is an example'
    })
  }
  