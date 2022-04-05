const { ObjectId } = require("fastify-mongodb");
const { readOne,createOne, updateOne } = require("../../../model/restaurant.js");

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {

      const result = await readOne(this.mongo,'62468cd41b73a31ef45a9118') 
      const reply_name=request.body.name;
      console.log("result======",result)
      const reply_price=request.body.price;
      //const test=result.params._id
      const restaurant = {
        _id:ObjectId('62468cd41b73a31ef45a9118') ,
        menu: [
            { _id:ObjectId(), name: reply_name, price: reply_price }
        ],
    }
     const postupdate=await updateOne(this.mongo,'62468cd41b73a31ef45a9118',restaurant)
     
  
      console.log("test===========",postupdate)
      reply
      .code(200)
      .header('content-type','application/json')
      .send({message:"ok"})
    })
  }
  

