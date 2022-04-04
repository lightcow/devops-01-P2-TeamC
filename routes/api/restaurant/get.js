const { readAll } = require("../../model")

  
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    // const result = await readAll(this.mongo)
       
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({message: "VALID"})
    })
}
  



