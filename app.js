// modules
const express = require('express')
const Routes = require('./routes')
const handlebarsEngine = require('./config/handlebars-engine')
const methodOverride = require('method-override')
require('./config/mongoose')

// app
const app = express()
const port = 3000

// app view engine
app.engine('handlebars', handlebarsEngine)
app.set('view engine', 'handlebars')

// app use
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(Routes)

// server start
app.listen(port, () => {
  console.log(`server is live on ${port}`)
})