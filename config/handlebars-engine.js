// modules
const handlebars = require('express-handlebars')
const helper = require('./handlebars-helper')

const myHandlebars = handlebars.create({
  defaultLayout: 'main',
  helper: helper,
})

module.exports = myHandlebars.engine




