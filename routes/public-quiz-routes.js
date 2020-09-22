const express = require("express");
const router = express.Router();
const questionsRoutes = require("./questions-routes");
//we will replace this later
const { getUsers, getUserById } = require('../db/queries/user-queries');
const { getQuizzes, getQuizById, getQuizzesByUserId, getThreeRandomQuizzes } = require('../db/queries/quiz-queries');

//we will replace this later
const { getUsers, getUserById } = require("../db/queries/user-queries");
const {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId,
} = require("../db/queries/quiz-queries");

// localhost:3000/quizzes
// this is the BROWSE route for ALL users

router.get('/', (req, res) => {
  getQuizzes()
    .then((quizzes) => {
      res.send(quizzes);
    });
});

router.get('/random', (req, res) => {
  getThreeRandomQuizzes()
    .then((quizzes) => {
      console.log(quizzes);
      res.send(quizzes);
    }).catch((err) => {console.log("error in /random: ", err)});
});

app.use("/dashboard", dashboardRoutes);

//localhost:3000/quizzes/:quiz_id/questions/
router.use(
  "/:quiz_id/questions",
  (req, res, next) => {
    req.quiz_id = req.params.quiz_id;
    next();
  },
  questionsRoutes
);

// router.get("/questions", (req, res) => {

//get a quiz by the quiz.id = quizzes/:id e.g. quizzes/1
//localhost:3000/quizzes/:id/questions/:question_id/answers/:answer_id
router.get('/:id', (req, res) => {
  getQuizById(req.params.id)
    .then((quiz) => {
      res.render('quiz', { quiz });
    });
});


module.exports = router;
