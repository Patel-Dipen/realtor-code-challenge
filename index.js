const http = require('http')
const config = require('config')
const app = require('./server/app')
const open = require('open')

const BASE_PATH = config.get('BASE_PATH')
const HTTP_PORT = config.get('SERVER.HTTP_PORT')

const httpServer = http.createServer(app).listen(HTTP_PORT, () => {
  console.log(`App ready at http://localhost:${HTTP_PORT}${BASE_PATH}`)

  open('http://localhost:8080/eq-zen-garden', { app: ['google-chrome'] })
})

process.on('SIGTERM', () => {
  httpServer.close(() => {
    console.log('SIGTERM issued...app is shutting down')
  })
})
