const pool = require("../db.js");

// Gets all available quizzes
const getQuestionsFromQuiz = (quiz_id, question_id) => {
  const queryString = "SELECT * FROM questions WHERE quiz_id = $1 AND id = $2";
  return pool.query(queryString, [quiz_id, question_id]).then((response) => {
    return response.rows;
  });
};

// Gets total number of questions per quiz we need a number like 4
const getTotalQuestionsPerQuiz = (quiz_id) => {
  const queryString = `SELECT quizzes.name, COUNT(*) FROM quizzes JOIN questions on quizzes.id = questions.quiz_id where quizzes.id = $1 group by quizzes.name`;
  return pool.query(queryString, [quiz_id]).then((response) => {
    return response.rows;
  });
};

module.exports = {
  getQuestionsFromQuiz,
  getTotalQuestionsPerQuiz,
};
