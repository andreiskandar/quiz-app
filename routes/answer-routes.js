const express = require("express");
const router = express.Router();
//we will replace this later
const {
  getAnswersByQuestionId,
  getAllQuizDataForUser,
} = require("../db/queries/answer-queries");
const {
  insertAnswersIntoAnswersTable,
} = require("../db/queries/create-quiz-queries");

const {
  postUserAnswerToQuestion,
} = require("../db/queries/users_answers-queries");

//localhost:3000/quizzes/:id/questions/:question_id/answers/
router.get("/", (req, res) => {
  const question_id = req.question_id;
  getAnswersByQuestionId(question_id)
    .then((answers) => {
      res.send(answers);
    })
    .catch((e) => console.error("getAnswerByQuestionId from db", e));
});

//localhost:3000/quizzes/:id/questions/:question_id/answers/
router.get("/:answer_id/results", (req, res) => {
  const user_id = req.session.user_id;
  getAllQuizDataForUser(user_id).then((results) => {
    res.render("my-results", { results });
  });
});

router.post("/create-answer", (req, res) => {
  const question_id = req.question_id;
  const request = req.body;
  const user_id = req.session.id;
  insertAnswersIntoAnswersTable(request, user_id, question_id)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => console.error("error create question", e));
});

//localhost:3000/quizzes/:id/questions/:question_id/answers/:answer_id
router.post("/:answer_id", (req, res) => {
  const { user_id } = req.session;
  const { answer_id } = req.params;
  postUserAnswerToQuestion(user_id, answer_id)
    .then((answers) => {
      res.send(answers);
    })
    .catch((e) => console.log("postUserAnswerToQuestion from db", e));
});

module.exports = router;
