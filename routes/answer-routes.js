const express = require("express");
const router = express.Router();
//we will replace this later
const { getAnswersByQuestionId } = require("../db/queries/answer-queries");

//Don't think we need the middleware in this
//localhost:3000/quizzes/:id/questions/:question_id/answers/
router.get("/", (req, res) => {
  console.log("in answer route:")
  const question_id = req.question_id;
  getAnswersByQuestionId(question_id)
    .then((answers) => {
      console.log('answers:', answers)
      res.send(answers);
    })
    .catch((e) => console.log("getAnswerByQuestionId from db", e));
});

// GET /quiz/
//these will not be cats once we have quiz data to generate

router.post("/create-answer", (req, res) => {
  console.log('in /create answer', req.body, req.session.id)
});

module.exports = router;
