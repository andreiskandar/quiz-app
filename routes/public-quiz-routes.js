const express = require("express");
const router = express.Router();
const questionsRoutes = require("./questions-routes");

//we will replace this later
const {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId,
} = require("../db/queries/quiz-queries");

// localhost:3000/quizzes
// this is the BROWSE route for ALL users

router.get("/", (req, res) => {
  getQuizzes().then((quizzes) => {
    res.send(quizzes);
  });
});

//localhost:3000/quizzes/:id/questions/:question_id/answers/:answer_id
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
router.get("/:id", (req, res) => {
  getQuizById(req.params.id).then((quiz) => {
    res.render("quiz", { quiz });
  });
});

module.exports = router;
