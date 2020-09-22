const pool = require("../db.js");

//gets all available quizzes
const getQuizzes = () => {
  return pool
    .query("SELECT * FROM quizzes WHERE public = true AND active = true;")
    .then((response) => {
      return response.rows;
    });
};

const getThreeRandomQuizzes = () => {
  return pool.query("SELECT * FROM quizzes WHERE public = true AND active = true ORDER BY RANDOM() LIMIT 3;").then((response) => {
    console.log(response.rows)
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
    });
};

//gets all quizzes belonging to that user
const getAllActiveQuizzesData = (id) => {
  return pool
    .query("SELECT * FROM quizzes WHERE user_id = $1;", [id])
    .then((response) => {
      return response.rows;
    });
};

module.exports = {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId,
  getAllActiveQuizzesData,
  getThreeRandomQuizzes
};
