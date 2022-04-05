const { ObjectId } = require('fastify-mongodb')

module.exports = {
  Addrestaurants: async (mongo, id) => {
    const collection = mongo.db.collection('restaurants')
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },
  readOne: async (mongo, resId, menuId) => {
    const collection = mongo.db.collection('restaurants')
    const result = await collection.findOne({
      _id: ObjectId(resId),
      'menu._id' : ObjectId(menuId)
    }, { projection : { _id : 0, 'menu.$' : 1 } }
    )

    return result
  },
  createOne: async (mongo, id, body) => {
    const collection = mongo.db.collection('restaurants')

    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: body
    })

    return result
  },
  updateOne: async (mongo, resId, menuId, body) => {
    const collection = mongo.db.collection('restaurants')

    const result = await collection.findOneAndUpdate({
      _id: ObjectId(resId),
      'menu._id': ObjectId(menuId)
    }, {
      $set: { "menu.$" : body }
    })
    return result
  },
  deleteOne: async (mongo, resId, menuId) => {
    const collection = mongo.db.collection('restaurants')

    const result = await collection.findOneAndUpdate({
      _id: ObjectId(resId),
      'menu._id': ObjectId(menuId)
    }, {
      $unset: { "menu.$" : 1 }
    })
    return result
  }
}