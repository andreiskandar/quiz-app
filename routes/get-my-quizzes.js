const express = require("express");
const router = express.Router();
//we will replace this later
const { getQuestions } = require("../db/queries/question-queries");
const {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId,
  getAllActiveQuizzesData,
  getFirstQuestionIdByQuizId
} = require("../db/queries/quiz-queries");

//GET all quizzes belonging to the speicfic user dashboard/my-quizzes
router.get("/", (req, res) => {
  const user_id = req.session.user_id;
  getQuizzesByUserId(user_id)
    .then((quizzes) => {
      res.send(quizzes);
    })
    .catch((e) =>
      console.error("error getQuizzesByUserId from get-my-quizzes.js ", e)
    );
});

router.post('/question1', (req, res) => {
  const quiz_id = Object.keys(req.body)[0]
  console.log('quiz_id:', quiz_id)
  getFirstQuestionIdByQuizId(quiz_id)
  .then((question_id) => {
    console.log('question_id:', question_id)

    res.send(question_id);
  })
  .catch((e) => console.error("error", e)
  );
})

module.exports = router;
