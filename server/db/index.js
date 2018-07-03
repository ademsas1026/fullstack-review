const db = require('./db')

// register models
const { Book, Sauce } = require('./models')

module.exports = {
  db,
  Book,
  Sauce
}
