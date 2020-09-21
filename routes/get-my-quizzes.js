const express = require('express');
const router = express.Router();
//we will replace this later
const { getUsers, getUserById } = require('../db/queries/user-queries');
const { getQuizzes, getQuizById, getQuizzesByUserId} = require('../db/queries/quiz-queries');


//GET all quizzes belonging to the speicfic user
router.get('/', (req, res) => {
  getQuizzesByUserId(req.session.id)
  .then((quizzes) => {
    res.send( quizzes );
  });
});

module.exports = router;
