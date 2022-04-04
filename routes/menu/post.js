
module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
      reply
      .code(200)
      .header('content-type','application/json')
      .send({message:"ok"})
    })
  }
  

