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
     getUsers((users) => {
       console.log(users)
      res.render('my-quizzes', { users })
  });
});



module.exports = router;
