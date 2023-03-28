const db = require('../../config/mongoose')
const Restaurant = require('../../models/restaurant')

db.once('open', () => {
  console.log('deleting all data...')

  Restaurant.deleteMany({})
    .then(() => {
      console.log('delete all data successfully!')
    })
    .catch(error => {
      console.log(error)
    })
})
