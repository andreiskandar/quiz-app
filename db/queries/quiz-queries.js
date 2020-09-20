const pool = require('../db.js');

//non functioning
const getQuizzes = () => {
  return pool.query("SELECT * FROM quizzes;").then((response) => {
    return response.rows;
  });
};

//non functioning
const getQuizById = (id) => {
  return pool
    .query("SELECT * FROM products WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getQuizzes,
  getQuizById,
};
