const pool = require("../db.js");

//gets all available quizzes
const getQuestionsFromQuiz = (quiz_id, question_id) => {
  const queryString = "select * from questions where quiz_id = $1 and id = $2";
  return pool.query(queryString, [quiz_id, question_id]).then((response) => {
    return response.rows;
  });
};

//get total number of questions per quiz we need a number like 4
const getTotalQuestionsPerQuiz = (quiz_id) => {
const queryString = `SELECT COUNT(*) FROM quizzes JOIN questions on quizzes.id = questions.quiz_id where quizzes.id = $1`
return pool.query(queryString, [quiz_id]).then((response) => {
return response.rows;
})
};

module.exports = {
  getQuestionsFromQuiz,
  getTotalQuestionsPerQuiz
};
