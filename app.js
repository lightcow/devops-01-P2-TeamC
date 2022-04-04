'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    url: 'mongodb://root:example@mongo-nlb-b84189a7fbb46ab6.elb.ap-northeast-2.amazonaws.com:27017/baedal?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
})
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
