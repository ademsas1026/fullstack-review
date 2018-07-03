const Sequelize = require('sequelize')
const db = require('../db')

const Sauce = db.define('sauces', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING, 
    allowNull: false
  }
})

module.exports = Sauce

