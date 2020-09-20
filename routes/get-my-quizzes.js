const express = require('express');
const router = express.Router();
//we will replace this later
const { getUsers, getUserById } = require('../db/user-queries');


// GET /quiz/
//please replace with quiz-queries
router.get('/', (req, res) => {
  getUsers()
  .then((users) => {
    res.render('my-quizzes', { users });
  });
});

//GET /quiz/:id
//please replace with quiz-queries
// router.get('/:id', (req, res) => {
//   getUserById(req.params.id)
//   .then((user) => {
//     res.render('quiz', { user });
//   });
// });



module.exports = router;
