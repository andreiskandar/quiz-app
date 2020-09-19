const express = require('express');
const router = express.Router();
//we will replace this later
// const { getCats, getCatById } = require('../db/cat-queries');

// const { getProductById, getProducts } = require('../db/product-queries');
// add middleware
router.use((req, res, next) => {
  // if (!req.session.user_id) {
  //   return res.redirect('/login');
  // }
  console.log('product middleware called');
  next();
});
// GET /quiz/
//these will not be cats once we have quiz data to generate
//we don't specifically need to handle user authentication as a requirement but we may do it later!
router.get('/', (req, res) => {
  //may need to pop in a function here to authenticate our "fake" users
  res.render('home')
});

router.get('/login', (req, res) => {
  //may need to pop in a function here to authenticate our "fake" users
  res.render('home')
});

router.get('/register', (req, res) => {
  //may need to pop in a function here to authenticate our "fake" users
  res.render('home')
});

module.exports = router;
