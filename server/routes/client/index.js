const config = require('config')
const express = require('express')
const router = express.Router()
const buildDefaultState = require('./state')

const renderClient = (req, res) =>
  res.type('html').send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Earthquake Zen Garden</title>
        <script>
          window.__DEFAULT_STATE__ = ${JSON.stringify(buildDefaultState(req))};
        </script>
        <link rel="stylesheet" href="${config.BASE_PATH}/styles/app.css" />
        <link rel="shortcut icon" href="${config.BASE_PATH}/favicon.ico" />
      </head>

      <body>
        <div id="root"></div>
        <script type="text/javascript" src="${config.BASE_PATH}/vendor.js"></script>
        <script type="text/javascript" src="${config.BASE_PATH}/app.js"></script>
      </body
    </html>
  `)

router.use(express.static('./dist'))
router.get('/', renderClient)

module.exports = router
