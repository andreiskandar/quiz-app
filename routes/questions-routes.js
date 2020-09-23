const express = require("express");
const router = express.Router();
//we will replace this later

const answerRoutes = require("./answer-routes");

const { getQuestionsFromQuiz, getTotalQuestionsPerQuiz } = require("../db/queries/question-queries");

router.get('/', (req,res) => {
  const quiz_id = req.quiz_id
  //get total questions
  getTotalQuestionsPerQuiz(quiz_id)
.then((amount) => {
  res.send(amount)
}).catch((e) => console.log ('gettotalquestionspquiz', e))
});


//localhost:3000/quizzes/:quiz_id/questions
router.get("/:question_id", (req, res) => {
  const quiz_id = req.quiz_id;
  console.log(quiz_id)
  const question_id = req.params.question_id;
  console.log("question_id:", question_id);
  getQuestionsFromQuiz(quiz_id, question_id)
    .then((questions) => {
      console.log(questions)
      res.send(questions);
    })
    .catch((e) => console.log("getQuestions from db", e));
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

router.post('/create-question', (req, res) => {
console.log('in /create-question', req.body)
console.log('in /create-question', req.session.id)
})

module.exports = router;
