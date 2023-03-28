// modules
const express = require('express')
const router = express.Router()
const homePage = require('./modules/home')
const restaurantsPage = require('./modules/restaurants')
const searchPage = require('./modules/search')

router.use('/', homePage)
router.use('/search', searchPage)
router.use('/restaurants', restaurantsPage)

module.exports = router
