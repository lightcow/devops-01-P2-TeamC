
const { readOne, updateOne } = require("../../../model/restaurant.js")

module.exports = async function (fastify, opts) {
    fastify.put('/:id', async function (request, reply) {
      const restaurant = await readOne(this.mongo, '62468697e4f358304b6ec31d')
      
      let newMenu;
      let oldMenu=[];
      for(let i = 0; i < restaurant.menu.length; i++){
        if (restaurant.menu[i]._id.toString() === request.params.id){
          newMenu = { ...restaurant.menu[i], name: request.body.name, price: request.body.price};
          // console.log("=====newMenu=====\n", newMenu)
        }
        else{
          oldMenu.push({...restaurant.menu[i]})
          // console.log("=====oldMenu=====\n", oldMenu)
        }
      }
      let wholeMenu = oldMenu;
      wholeMenu.push(newMenu);
      
      let newRestaurant= {menu: wholeMenu}
      const result = await updateOne(this.mongo, '62468697e4f358304b6ec31d', newRestaurant)
      const modifiedRestaurant = await readOne(this.mongo, '62468697e4f358304b6ec31d')
      
      reply
        .code(200)
        .header('content-type', 'application/json')
        .send(modifiedRestaurant.menu.find(item => item._id == request.params.id))
    })
  }
  

