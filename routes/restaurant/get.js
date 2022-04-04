const { readAll } = require("../../../model")

    
    module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
         const restaurant =  this.mongo.db.collection('restaurants')
         console.log("get==================================",restaurant)
      reply
      .code(200)
      .header('content-type','application/json')
      .send(restaurant)
    })
  }
  



