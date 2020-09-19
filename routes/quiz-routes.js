const express = require('express');
const router = express.Router();
//we will replace this later
const { getUsers, getUserById } = require('../db/user-queries');

// const { getProductById, getProducts } = require('../db/product-queries');
// add middleware
// router.use((req, res, next) => {
//   // if (!req.session.user_id) {
//   //   return res.redirect('/login');
//   // }
//   console.log('product middleware called');
//   next();
// });
// GET /quiz/
//these will not be cats once we have quiz data to generate
router.get('/', (req, res) => {
  getUsers()
  .then((users) => {
    res.render('my-quizzes', { users });
  });
});

//GET /quiz/:id
//these will not be cats once we have quiz data to generate
router.get('/:id', (req, res) => {
  getUserById(req.params.id)
  .then((user) => {
    res.render('quiz', { user });
  });
});

module.exports = router;
