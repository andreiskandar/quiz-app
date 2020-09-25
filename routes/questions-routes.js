const express = require("express");
const router = express.Router();
//we will replace this later

const answerRoutes = require("./answer-routes");

const {
  getQuestionsFromQuiz,
  getTotalQuestionsPerQuiz,
} = require("../db/queries/question-queries");

const {
  insertQuestionIntoQuestionsTable,
} = require("../db/queries/create-quiz-queries");

router.get("/", (req, res) => {
  const quiz_id = req.quiz_id;
  //get total questions
  getTotalQuestionsPerQuiz(quiz_id)
    .then((amount) => {
      res.send(amount);
    })
    .catch((e) => console.error(e));
});

router.post("/create-question", (req, res) => {
  const request = req.body;
  const user_id = req.session.user_id;
  console.log('user_id in /create-question:', user_id)
  insertQuestionIntoQuestionsTable(request, user_id)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.error("error create question", e));
});

// quizzes/:quiz_id/questions/:question_id

//localhost:3000/quizzes/:quiz_id/questions
router.get("/:question_id", (req, res) => {
  const quiz_id = req.quiz_id;
  const question_id = req.params.question_id;
  getQuestionsFromQuiz(quiz_id, question_id)
    .then((questions) => {
      res.send(questions);
    })
    .catch((e) => console.error("getQuestions from db", e));
});

//localhost:3000/quizzes/:id/questions/:question_id/answers/
router.use(
  "/:question_id/answers",
  (req, res, next) => {
    req.question_id = req.params.question_id;
    next();
  },
  answerRoutes
);



module.exports = router;
