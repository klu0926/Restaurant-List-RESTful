// helper
const handlebars = require('handlebars')

handlebars.registerHelper('isSame', (string1, string2, options) => {
  if (string1 === string2) {
    return options.fn(this)
  }
  return options.inverse(this)
})

