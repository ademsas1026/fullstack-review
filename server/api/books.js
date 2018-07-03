const bookRouter = require('express').Router()
const {Book} = require('../db')
module.exports = bookRouter

bookRouter.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.send(books);
  } catch (err){
    next(err)
  }
})

