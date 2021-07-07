const { BASE_PATH } = require('config')
const express = require('express')
const router = express.Router()

router.get(BASE_PATH + '/health', (req, res) => {
  return res
    .status(200)
    .json({ status: 'UP!' })
    .end()
})

router.use(BASE_PATH + '/api', require('./api'))
router.use(BASE_PATH, require('./client'))

module.exports = router
