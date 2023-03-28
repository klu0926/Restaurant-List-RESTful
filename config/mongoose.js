const mongoose = require('mongoose')

if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
  console.log('dot env required')
}

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

console.log('connecting to MongoDB...')

const db = mongoose.connection

db.on('error', error => console.log(error))

db.once('open', () => console.log('MongoDB connected'))


module.exports = db