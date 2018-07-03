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

saucyRouter.get('/:sauceId', async (req, res, next) => {
  try {
    const sauce = await Sauce.findById(req.params.sauceId);
    res.send(sauce);
  } catch (err){
    next(err)
  }
})
