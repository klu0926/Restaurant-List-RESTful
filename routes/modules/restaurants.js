const Router = require('express').Router()
const restaurant = require('../../models/restaurant')
const Restaurant = require('../../models/restaurant')


// Search



// Create
Router.get('/new', (req, res) => {
  res.render('new')
})

Router.post('/new', (req, res) => {
  const data = req.body
  // check for name
  if (data.name.trim() === "") {
    return res.redirect('/new')
  }

  // check for address
  if (data.location.trim() !== "") {
    const encodedInput = data.location
    const googleMapLink = `https://www.google.com/maps?q=${encodedInput}`
    data.google_map = googleMapLink
  }
  Restaurant.create({ ...data })
    .then(() => {
      res.redirect('/')
    })
    .catch(error => {
      console.log(error)
    })
})

// Read All
Router.get('/', (req, res) => {

  Restaurant.find()
    .lean()
    .then(restaurants => {
      res.render('index', { restaurants })
    })
    .catch(error => {
      console.log(error)
    })
})

// Read One
Router.get('/:id', (req, res) => {
  const id = req.params.id

  Restaurant.findById(id)
    .lean()
    .then(restaurant => {
      res.render('detail', { restaurant })
    })
    .catch(error => {
      console.log(error)
    })
})

// Update
Router.get('/:id/edit', (req, res) => {
  const id = req.params.id

  Restaurant.findById(id)
    .lean()
    .then(restaurant => {
      res.render('edit', { restaurant })
    })
    .catch(error => {
      console.log(error)
    })
})

Router.put('/:id', (req, res) => {
  const id = req.params.id
  const updateData = req.body

  Restaurant.findById(id)
    .then(restaurant => {
      for (const key in updateData) {
        if (key in restaurant) {
          restaurant[key] = updateData[key]
        }
      }
      return restaurant.save()
    })
    .then(() => {
      res.redirect(`/restaurants/${id}`)
    })
    .catch(error => {
      console.log(error)
    })
})

// Delete
Router.delete('/:id', (req, res) => {
  const id = req.params.id

  Restaurant.findById(id)
    .then(restaurant => restaurant.deleteOne())
    .then(() => { res.redirect('/') })
    .catch(error => console.log(error))
})

module.exports = Router