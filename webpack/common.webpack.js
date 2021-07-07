const config = require('config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const commonConfig = {

  entry: {
    app: [
      './client/index.js'
    ]
  },

  mode: 'development',

  output: {
    publicPath: config.BASE_PATH
  },

  devtool: 'source-map',

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    }
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.(css|scss)$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: config.BASE_PATH,
            esModule: false
          }
        },
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: ['postcss-preset-env']
            }
          }
        },
        'sass-loader'
      ]
    }]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new CopyPlugin({
      patterns: [
        { from: './static/favicon.ico', to: './' }
      ]
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css']
  }

}

module.exports = commonConfig
