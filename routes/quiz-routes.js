const express = require('express');
const router = express.Router();
//we will replace this later
const { getUsers, getUserById } = require('../db/queries/user-queries');
const { getQuizzes, getQuizById, getQuizzesByUserId} = require('../db/queries/quiz-queries');


// GET /quiz/ This route is confusing me
//please replace with quiz-queries
router.get('/', (req, res) => {
  getQuizzesByUserId(req.params.id)
  .then((quizzes) => {
    res.render('my-quizzes', { quizzes });
  });
});

//GET /quiz/:id
//please replace with quiz-queries
// router.get('/:id', (req, res) => {
//   getQuizzesByUserId(id)
//   .then((quizzes) => {
//     res.render('quiz', { quiz });
//   });
// });

module.exports = router;
