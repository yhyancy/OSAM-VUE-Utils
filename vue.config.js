
// const webpack = require('webpack')
// const v18 = require('./vender/js/v18.js')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    port: 9000
  }

}
