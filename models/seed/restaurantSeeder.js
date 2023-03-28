const db = require('../../config/mongoose')
const Restaurant = require('../../models/restaurant')
const RestaurantData = require('../../models/restaurant.json').results

db.once('open', () => {
  console.log('creating seed data...')

  Restaurant.create(RestaurantData)
    .then(() => {
      console.log('seed data created!')
    })
    .catch(error => {
      console.log(error)
    })
})
