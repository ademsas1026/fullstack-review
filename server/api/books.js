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

bookRouter.get('/:bookId', async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.bookId);
    res.send(book);
  } catch (err){
    next(err)
  }
})


