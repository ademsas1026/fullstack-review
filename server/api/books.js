const bookRouter = require('express').Router()
const { Book } = require('../db')

bookRouter.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll()
    if (!books) res.sendStatus(404)
    res.json(books)
  } catch (err) {
    next(err)
  }
})

module.exports = bookRouter


