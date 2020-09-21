const express = require('express');
const router = express.Router();
//we will replace this later
const { getUsers, getUserById } = require('../db/queries/user-queries');
const { getQuizzes, getQuizById, getQuizzesByUserId} = require('../db/queries/quiz-queries');


// localhost:3000/quizzes
// this is the BROWSE route for ALL users

router.get('/', (req, res) => {
  getQuizzes()
  .then((quizzes) => {
    res.render('browse-quizzes', { quizzes });
  });
});

//get a quiz by the quiz.id = quizzes/:id e.g. quizzes/1
router.get('/:id', (req, res) => {
  getQuizById(req.params.id)
  .then((quiz) => {
    res.render('quiz', { quiz });
  });
});

module.exports = router;
