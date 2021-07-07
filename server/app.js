const config = require('config')
const express = require('express')
const app = express()

if (config.DEV_SERVER) {
  app.use(require('./middleware/dev'))
}

app.use(require('./routes'))

module.exports = app
