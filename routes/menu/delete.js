
module.exports = async function (fastify, opts) {
    fastify.delete('/', async function (request, reply) {
      return 'this is an example'
    })
  }
  

