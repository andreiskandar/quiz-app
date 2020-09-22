const pool = require('../db.js');

//gets all available quizzes
const getQuizzes = () => {
  return pool.query("SELECT * FROM quizzes;").then((response) => {
    console.log('quiz-queries.js response.rows:', response.rows);
    return response.rows;
  });
};

//gets a singular quiz by id
const getQuizById = (id) => {
  return pool
    .query("SELECT * FROM quizzes WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

//gets all quizzes belonging to that user
const getQuizzesByUserId = (id) => {
  return pool
  .query("SELECT * FROM quizzes WHERE user_id = $1;", [id])
  .then((response) => {
    return response.rows;
  })
}



module.exports = {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId
};
