const { updateOne, readOne } = require("../../../model/restaurant")

module.exports = async function (fastify, opts) {
    fastify.patch('/', async function (request, reply) {
      const id='62468cd41b73a31ef45a9118'
      const address=request.body.address
      const name=request.body.name
      const result = await updateOne(this.mongo,id,{name,address})
      const timeResult= await readOne(this.mongo,id)
      console.log("id==============",id)
      console.log("address-==============",address)
      console.log("name================",name)
      console.log("result=============",result)
      console.log("timereuslt================",timeResult);
      reply
      .code(200) 
      .header('content-type', 'application/json')
      .send(timeResult) 
    })
  }