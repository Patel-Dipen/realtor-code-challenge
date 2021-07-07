const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./common.webpack.js')

const development = {
  mode: 'development',

  entry: {
    app: [
      'webpack-hot-middleware/client',
      './client/index.js'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    })
  ]
}

module.exports = { ...common, ...development }
