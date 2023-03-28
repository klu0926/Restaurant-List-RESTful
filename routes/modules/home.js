const Router = require('express').Router()

// Read All
Router.get('/', (req, res) => {
  res.redirect('/restaurants')
})

module.exports = Router
