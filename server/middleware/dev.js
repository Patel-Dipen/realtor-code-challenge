const config = require('config')
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../../webpack/development.webpack.js')
const compiler = webpack(webpackConfig)

const dev = devMiddleware(compiler, {
  serverSideRender: true,
  publicPath: config.BASE_PATH
})

const hot = hotMiddleware(compiler)

const middleware = [dev, hot]

module.exports = middleware
