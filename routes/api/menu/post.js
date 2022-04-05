// const { ObjectId } = require('mongodb');
// const fastify = require('fastify')({ logger: true });
// const { createOne, updateOne, readAll } = require('../../../model/restaurant.js');



// module.exports = async function (fastify, opts) {
//     fastify.post('/', async function (request, reply) {
//       const restaurant = await readAll(this.mongo)
//       const id = request.body.id;
//       const name = request.body.name;
//       const price = request.body.price;
//       const bodys = {name, price};
//       const newmenu = {
//         _id: ObjectId('6246652af383e19ce033c4fb'),
//         menu: [
//           { _id:ObjectId(), name: name, price: price }
//         ],
//       }
      
//       function find_id(id) {
//         return id.key === '6246652af383e19ce033c502';
//       }
//       //////////////////
//       // fastify.put('/:id', updatePostOpts);
//       // const updatePostOpts = {
//       //   schema: updatePostSchema, // will be created in schemas/posts.js
//       //   handler: updatePostHandler, // will be created in handlers/posts.js
//       // };

//       // const updatePostSchema = {
//       //   body: {
//       //     type: 'object',
//       //     required: ['name', 'price'],
//       //     properties: {
//       //       name: String,
//       //       price: Number
//       //     },
//       //   },
//       //   params: {
//       //     id: { type: 'number' }, // converts the id param to number
//       //   },
//       //   response: {
//       //     200: typeString, // a simple message will be sent
//       //   },
//       // };

//       // const updatePostHandler = (req, reply) => {
//       //   const { name, price } = req.body;
//       //   const { id } = req.params;
      
//       //   const post = posts.filter((post) => {
//       //     return post.id === id;
//       //   })[0];
      
//       //   if (!post) {
//       //     return reply.status(404).send(new Error("Post doesn't exist"));
//       //   }
      
//       //   post.name = name;
//       //   post.price = price;
      
//       //   return reply.send({restaurants: newmenu.menu});
//       // };


//       ////////////////
//       const result = await createOne(this.mongo, bodys) ;
//       const restaurants = await updateOne(this.mongo, id, newmenu);
//       // const findID = await db.restaurants.find({'_id':'6246652af383e19ce033c4fb'})

//       // const updateMenu = restaurant.menu.filter(item => item._id == request.params.id)
  
//       if(!result){
//         reply
//         .code(404)
//         .header('content-type', 'application/json; charset=utf-8')
//         .send({error: 'Error'})
//       }
//       else{
//         reply
//         .code(201)
//         .header('content-type', 'application/json; charset=utf-8')
//         .send({restaurants: newmenu.menu})
//       }
      
//     })
//   };


'use strict'

const { ObjectId } = require('fastify-mongodb')
const { Addrestaurants, createOne } = require('../../../model/add_menu.js')

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {
    const tmpId = '624b7fad532f4695fe317913'
    const curBody = await Addrestaurants(this.mongo, tmpId)
    
    request.body._id = ObjectId()
    const newBody = { ...curBody, menu : [ ...curBody.menu, request.body ]}

    const result = await createOne(this.mongo, tmpId, newBody)
    const newRes = await Addrestaurants(this.mongo, tmpId)

    if(!result){
        reply
        .code(404) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({error : "Not Found"}) //데이터베이스에서 꺼내와야 함
    }else{
        reply
        .code(200) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send(newRes) //데이터베이스에서 꺼내와야 함
    }
  })
}