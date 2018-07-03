const Sequelize = require('sequelize')
const db = require('../db')

const Book = db.define('books', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bookJacket: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Book

