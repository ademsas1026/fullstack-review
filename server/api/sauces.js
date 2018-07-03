const saucyRouter = require('express').Router()
const {Sauce} = require('../db')
module.exports = saucyRouter

saucyRouter.get('/', async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll();
    res.send(sauces);
  } catch (err){
    next(err)
  }
})
