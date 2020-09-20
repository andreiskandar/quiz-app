const express = require('express');
const router = express.Router();
//we will replace this later
const { getUsers, getUserById } = require('../db/queries/user-queries');
const { getQuizzes, getQuizById, getQuizzesByUserId} = require('../db/queries/quiz-queries');


// GET /quiz/
//please replace with quiz-queries
// router.get('/', (req, res) => {
//   getUsers()
//   .then((users) => {
//     res.render('my-quizzes', { users });
//   });
// });

//GET /quiz/:id
router.get('/', (req, res) => {
  getQuizzesByUserId(req.session.id)
  .then((quizzes) => {
    console.log(quizzes)
    res.render('my-quizzes', { quizzes });
  });
});



module.exports = router;
