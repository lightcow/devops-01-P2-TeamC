
const { readOne, updateOne } = require("../../../model/restaurant.js")

module.exports = async function (fastify, opts) {
    fastify.put('/:id', async function (request, reply) {
      const restaurant = await readOne(this.mongo, '62468697e4f358304b6ec31d')
      
      console.log("=====read the restaurant=====\n", restaurant.menu)
      const updateMenu = restaurant.menu.filter(item => item._id == request.params.id)
      console.log("=====read the restaurant=====\n", updateMenu)
      console.log("=====read the restaurant=====\n", request.body)

      // const result = await updateOne(this.mongo, request.params._id, request.body) 
      // reply
      //   .code(200) 
      //   .header('content-type', 'application/json')
      //   .send({
      //     "_id": result._id,
      //     "name": result.name,
      //     "price": result.price
      //   }) 
      return 'hello world'
    })
  }
  

