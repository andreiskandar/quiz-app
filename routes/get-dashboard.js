const express = require('express');
const router = express.Router();
//we will replace this later
const { getUsers, getUserById } = require('../db/queries/user-queries');
const myQuizRoutes = require('./get-my-quizzes');
const createQuizRoutes = require('./get-create-quiz');
const { Template } = require('ejs');
// const app = express();

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
//we need to check if the user is logged in
router.get('/', (req, res) => {
  getUserById(req.session.id)
    .then((user) => {
      let templateVars;
      //these if checks are used to bypass logging in for testing
      if (user) {
        templateVars = {
          name: user.nickname
        }
        //this is to make sure our dashboard.ejs doesn't error
      } else {
        templateVars = {
          name: null
        }
      }
      res.render('dashboard', templateVars)
    });
});

router.use('/my-quizzes', myQuizRoutes);

router.use('/new', createQuizRoutes)

//GET /quiz/:id
//taken-quizzes
// router.get('/:id', (req, res) => {
//   getCatById(req.params.id)
//   .then((cat) => {
//     res.render('quiz', { cat });
//   });
// });

//my-quizzes


module.exports = router;
