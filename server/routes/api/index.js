const router = require('express').Router()
const fs = require('fs')

const getSiteData = (req, res) => {
  try {
    const data = fs.readFileSync('server/routes/data/payload.json', 'utf8')
    const result = JSON.parse(data)

    return res
      .status(200)
      .json(result.site || {})
      .end()
  } catch (err) {
    console.log('ERROR: ', err)
  }
}

const getProfileData = (req, res) => {
  try {
    const data = fs.readFileSync('server/routes/data/payload.json', 'utf8')
    const result = JSON.parse(data)

    return res
      .status(200)
      .json(result.profile || {})
      .end()
  } catch (err) {
    console.log('ERROR: ', err)
  }
}

const getEarthquakeData = (req, res) => {
  try {
    const data = fs.readFileSync('server/routes/data/payload.json', 'utf8')
    const result = JSON.parse(data)

    return res
      .status(200)
      .json(result.data || {})
      .end()
  } catch (err) {
    console.log('ERROR: ', err)
  }
}

router.get('/site', getSiteData)
router.get('/profile', getProfileData)
router.get('/earthquake', getEarthquakeData)

module.exports = router
