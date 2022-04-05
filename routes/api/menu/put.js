
const { readOne, updateOne } = require("../../../model/restaurant.js")

module.exports = async function (fastify, opts) {
    fastify.put('/:id', async function (request, reply) {
      const restaurant = await readOne(this.mongo, '62468697e4f358304b6ec31d')
      console.log(restaurant.menu[1]._id)
      // let newRestaurant= {...restaurant, menu:[]}
      // console.log("=====restaurant.menu=====\n", restaurant.menu)
      // const updateMenu = restaurant.menu.find(item => item._id == request.params.id)
      // console.log("=====updateMenu=====\n", updateMenu)
      // const newMenu = { ...updateMenu[0], name: request.body.name, price: request.body.price}
      // console.log("=====newMenu=====\n", newMenu)
      
      // console.log("=====newRestaurant=====\n", newRestaurant)

      let newMenu;
      let oldMenu=[];
      for(let i = 0; i < restaurant.menu.length; i++){
        if (restaurant.menu[i]._id.toString() === request.params.id){
          newMenu = { ...restaurant.menu[i], name: request.body.name, price: request.body.price};
          console.log("=====newMenu=====\n", newMenu)
        }
        else{
          oldMenu.push({...restaurant.menu[i]})
          console.log("=====oldMenu=====\n", oldMenu)
        }
      }
      let wholeMenu = oldMenu;
      wholeMenu.push(newMenu);
      console.log("=====wholeMenu=====\n", wholeMenu)

      let newRestaurant= {menu: wholeMenu}
      const result = await updateOne(this.mongo, '62468697e4f358304b6ec31d', newRestaurant)
      const modifiedRestaurant = await readOne(this.mongo, '62468697e4f358304b6ec31d')
      // const result = await updateOne(this.mongo, request.params._id, request.body) 
      // reply
      //   .code(200) 
      //   .header('content-type', 'application/json')
      //   .send({
      //     "_id": result._id,
      //     "name": result.name,
      //     "price": result.price
      //   }) 
      reply
        .code(200)
        .header('content-type', 'application/json')
        .send(modifiedRestaurant.menu.find(item => item._id == request.params.id))
    })
  }
  

