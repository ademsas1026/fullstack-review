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

bookRouter.put('/:bookId', async (req, res, next) => {
  try {
    /* remember the Model.update function returns an array containing
      1) the number of affected instances, in this case 1 and
      2) the affected instances themselves, in this case just the one book
      because they're returned to us in this order, we have to declare a variable for the first value, even if we're not using it
      a convention for declaring unused variables is to use an underscore _
    */
    const [_, updatedBook] = await Book.update(req.body, {
      where: { id: +req.params.bookId },
      returning: true,
      plain: true
    })
    if (!updatedBook) res.sendStatus(404)
    res.json(updatedBook)
  } catch (err) {
    next(err)
  }
  


})


