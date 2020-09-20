const express = require('express');
const router = express.Router();
//we will replace this later
const { getUsers, getUserById, getUserByEmail } = require('../db/queries/user-queries');



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

router.post('/login', (req, res) => {
  const {email} = req.body;
  console.log(email)
  //query the database
  getUserByEmail(email)
  .then((user) => {
    console.log(user.id);
    req.session.id = user.id;
    // req.session.id = user.id;
    console.log(req.session)
    console.log(req.session.id);
    res.redirect('/dashboard')
  });
});


router.get('/register', (req, res) => {
  //may need to pop in a function here to authenticate our "fake" users
  res.render('home')
});



module.exports = router;
