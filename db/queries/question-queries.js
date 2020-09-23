const pool = require("../db.js");

//gets all available quizzes
const getQuestionsFromQuiz = (quiz_id, question_id) => {
  const queryString = "select * from questions where quiz_id = $1 and id = $2";
  return pool.query(queryString, [quiz_id, question_id]).then((response) => {
    return response.rows;
  });
};

module.exports = {
  getQuestionsFromQuiz,
};
