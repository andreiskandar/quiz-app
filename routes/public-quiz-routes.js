const express = require("express");
const router = express.Router();
const { postUserAnswerToQuiz } = require("../db/queries/users_quizzes-queries");
const questionsRoutes = require("./questions-routes");
const dashboardRoutes = require("./get-dashboard");
const {
  insertQuizIntoQuizzes,
} = require("../db/queries/create-quiz-queries.js");

const {
  getQuizzes,
  getQuizById,
  getThreeRandomQuizzes,
} = require("../db/queries/quiz-queries");

const public = "public";

// localhost:3000/quizzes/
// this is the BROWSE route for ALL users
router.get("/", (req, res) => {
  getQuizzes(public).then((quizzes) => {
    res.send(quizzes);
  });
});

// localhost:3000/quizzes/random
router.get("/random", (req, res) => {
  getThreeRandomQuizzes()
    .then((quizzes) => {
      res.send(quizzes);
    })
    .catch((err) => {
      console.log("error in /random: ", err);
    });
});

router.post("/create-quiz", (req, res) => {
  const request = req.body;
  const user_id = req.session.user_id;
  insertQuizIntoQuizzes(request, user_id)
    .then((data) => {
      console.log("in /quizzes/create quiz: ", req.body);
      res.send(data);
    })
    .catch((e) => console.error("error create quiz", e));
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

//get a quiz by the quiz.id = quizzes/:id e.g. quizzes/1
//localhost:3000/quizzes/:quiz_id
router.get("/:quiz_id", (req, res) => {
  const { quiz_id } = req.params;
  getQuizById(quiz_id).then((quiz) => {
    if (quiz.public === true) {
      return res.render("quiz", { quiz });
    }
    return res.render("quiz", { quiz });
  });
});

//localhost:3000/quizzes/create-quiz
router.post("/create-quiz", (req, res) => {
  const request = req.body;
  const user_id = req.session.id;
  insertQuizIntoQuizzes(request, user_id)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.error("error create quiz", e));
});

//localhost:3000/quizzes/:id
router.post("/:quiz_id", (req, res) => {
  const { user_id } = req.session;
  const { quiz_id } = req.params;
  postUserAnswerToQuiz(quiz_id, user_id)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.error("postUserAnswerToQuiz router", e));
});

module.exports = router;
