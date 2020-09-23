const pool = require("../db.js");

//gets all available quizzes
const getQuestionsFromQuiz = (quiz_id, question_id) => {
  const queryString = "SELECT * FROM questions WHERE quiz_id = $1 AND id = $2";
  return pool.query(queryString, [quiz_id, question_id]).then((response) => {
    return response.rows;
  });
};

const getTotalQuestionFromQuiz = (quiz_id) => {
  const queryString = "SELECT count(*) FROM questions WHERE quiz_id = $1";
  return pool.query(queryString, [quiz_id]).then((response) => {
    return response.rows;
  });
};
module.exports = {
  getQuestionsFromQuiz,
  getTotalQuestionFromQuiz,
};
