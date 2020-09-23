const pool = require("../db.js");

//gets all available quizzes
const getAnswersByQuestionId = (question_id) => {
  const queryString = "SELECT * FROM answers where question_id = $1";
  return pool.query(queryString, [question_id]).then((response) => {
    // console.log(response.rows);
    return response.rows;
  });
};

module.exports = {
  getAnswersByQuestionId,
};
