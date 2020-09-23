const express = require("express");
const router = express.Router();
//we will replace this later
const { getAnswersByQuestionId } = require("../db/queries/answer-queries");
const {
  postUserAnswerToQuestion,
} = require("../db/queries/users_answers-queries");
//Don't think we need the middleware in this

//localhost:3000/quizzes/:id/questions/:question_id/answers/
router.get("/", (req, res) => {
  const question_id = req.question_id;
  getAnswersByQuestionId(question_id)
    .then((answers) => {
      res.send(answers);
    })
    .catch((e) => console.log("getAnswerByQuestionId from db", e));
});

//localhost:3000/quizzes/:id/questions/:question_id/answers/:answer_id
router.post("/:answer_id", (req, res) => {
  const { user_id } = req.session;
  const { answer_id } = req.params;
  postUserAnswerToQuestion(user_id, answer_id)
    .then((answers) => {
      console.log("insertion to users_answers table success");
      res.send(answers);
    })
    .catch((e) => console.log("postUserAnswerToQuestion from db", e));
});

module.exports = router;
