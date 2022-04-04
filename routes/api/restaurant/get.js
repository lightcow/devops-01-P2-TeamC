//const { readAll } = require("../../model")

  
const { readAll, readOne } = require("../../../model/restaurant.js")

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
  
    const result = await readOne(this.mongo,'62468cd41b73a31ef45a9118') 

    if(!result){
      reply
      .code(404) 
      .header('content-type', 'application/json')
      .send({error : "not "})
    }else{
      reply
        .code(200) 
        .header('content-type', 'application/json')
        .send(result) 
    }
  })
}


