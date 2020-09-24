const express = require("express");
const router = express.Router();
//we will replace this later
const { getAnswersByQuestionId, getAllQuizDataForUser } = require("../db/queries/answer-queries");
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
    .catch((e) => console.log("getAnswerByQuestionId from db", e));
});

//localhost:3000/quizzes/:id/questions/:question_id/answers/
router.get("/:answer_id/results", (req, res) => {
  const user_id = req.session.user_id;
  getAllQuizDataForUser(user_id).then((results) => {
    res.render('my-results', { results })
  })
})

// GET /quiz/
//these will not be cats once we have quiz data to generate

router.post("/create-answer", (req, res) => {
  const question_id = req.question_id;
  const request = req.body;
  const user_id = req.session.id;
  console.log("user_id: from /create answer", user_id);
  console.log("request:", request);
  console.log("question_id:", question_id);
  insertAnswersIntoAnswersTable(request, user_id, question_id)
    .then((data) => {
      console.log("data:", data);
      console.log("data arr :", data[0]);
      res.send(data);
    })
    .catch((e) => console.error("error create question", e));

  //localhost:3000/quizzes/:id/questions/:question_id/answers/:answer_id
  router.post("/:answer_id", (req, res) => {
    const { user_id } = req.session;
    const { answer_id } = req.params;
    console.log("user_id: from router", user_id);
    console.log("answer_id: from router", answer_id);
    postUserAnswerToQuestion(user_id, answer_id)
      .then((answers) => {
        console.log("insertion to users_answers table success");
        res.send(answers);
      })
      .catch((e) => console.log("postUserAnswerToQuestion from db", e));
  });
});
module.exports = router;
