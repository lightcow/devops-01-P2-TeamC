const { createOne, updateOne } = require('../../../model/restaurant.js')

module.exports = async function (fastify, opts) {
    fastify.post('/', async function (request, reply) {
      const _id = Number(request.query._id)
      const menuBody = {
        name: String,
        price : Number
      }
      
      const result = await createOne(this.mongo, menuBody) 
      const newStatus = await updateOne(this.mongo, _id, {status: true})
  
      if(!result){
        reply
        .code(404)
        .header('content-type', 'application/json; charset=utf-8')
        .send({error: 'Error'})
      }
      else{
        reply
        .code(201)
        .header('content-type', 'application/json; charset=utf-8')
        .send({menuBody: menuBody})
      }
      
    })
  }