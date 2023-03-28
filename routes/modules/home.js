const Router = require('express').Router()
const Restaurant = require('../../models/restaurant')


// Read All
Router.get('/', (req, res) => {
  res.redirect('/restaurants')
})

module.exports = Router