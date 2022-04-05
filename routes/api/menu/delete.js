const { readOne, updateOne } = require("../../../model/restaurant.js")

module.exports = async function (fastify, opts) {
    fastify.delete('/:id', async function (request, reply) {
      const restaurant = await readOne(this.mongo, '62468697e4f358304b6ec31d')
      let newMenu=[]
      for(let i = 0; i < restaurant.menu.length; i++){
        if (!(restaurant.menu[i]._id.toString() === request.params.id)){
          newMenu.push({...restaurant.menu[i]})
        }
      }
      
      // let wholeMenu = oldMenu;
      // wholeMenu.push(newMenu);
      
      let newRestaurant= {menu: newMenu}
      const result = await updateOne(this.mongo, '62468697e4f358304b6ec31d', newRestaurant)
      // const modifiedRestaurant = await readOne(this.mongo, '62468697e4f358304b6ec31d')
      
      reply
        .code(204)
        .header('content-type', 'application/json')
        .send('ok')
      // return newRestaurant
    })
  }
  

