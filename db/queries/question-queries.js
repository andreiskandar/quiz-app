const pool = require("../db.js");

//gets all available quizzes
const getQuestions = () => {
  const queryString = "SELECT * FROM questions";
  return pool.query(queryString).then((response) => {
    return response.rows;
  });
};

module.exports = {
  getQuestions,
};
