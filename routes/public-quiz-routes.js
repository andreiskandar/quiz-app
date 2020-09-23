const express = require("express");
const router = express.Router();
const questionsRoutes = require("./questions-routes");
const dashboardRoutes = require("./get-dashboard");
//we will replace this later

const { getQuizzes, getQuizById, getQuizzesByUserId, getThreeRandomQuizzes } = require('../db/queries/quiz-queries');


// localhost:3000/quizzes
// this is the BROWSE route for ALL users

router.get("/", (req, res) => {
  getQuizzes().then((quizzes) => {
    res.send(quizzes);
  });
});

router.get('/random', (req, res) => {
  getThreeRandomQuizzes()
    .then((quizzes) => {
      // console.log(quizzes);
      res.send(quizzes);
    }).catch((err) => {console.log("error in /random: ", err)});
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
    console.log("hello from getQuizById in public-quiz-routes")
    res.render("quiz", { quiz });
  });
});

module.exports = router;
