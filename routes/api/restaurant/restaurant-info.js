'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.code(200)
    .send({
        "_id": "62374c64e5bfa293bf21831b",
        "name": "동백커피 센텀점",
        "menu": [
          {
            "_id": "62374fe0e5bfa293bf218347",
            "name": "동백커피",
            "price": 4000
          }
        ],
        "address": "부산시 수영구 센텀1로 777",
        "rating": 4.8
      })
  })
}