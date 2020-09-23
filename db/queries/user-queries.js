//this file will ultimately serve as our users queries
const pool = require("../db.js");

//get all users
const getUsers = () => {
  return pool.query("SELECT * FROM users;").then((response) => {
    return response.rows;
  });
};

//gets a user by ID number
const getUserById = (id) => {
  return pool
    .query("SELECT * FROM users WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

//get a user by email - this is used to specifically assign a session cookie
const getUserByEmail = (email) => {
  queryString = "SELECT id FROM users WHERE email = ";
  queryString += "$1";
  queryString += ";";

  return pool.query(queryString, [email]).then((response) => {
    return response.rows[0];
  });
};

//get a user type (by email) - used to switch header
const getUserTypeById = (id) => {
  queryString = "SELECT * FROM users WHERE id = ";
  queryString += "$1";
  queryString += ";";

  return pool.query(queryString, [id]).then((response) => {
    return response.rows[0];
  });
};

const postUserAnswerToQuiz = (quiz_id, user_id) => {
  const queryString = `INSERT INTO users_quizzes (quiz_id, user_id, time_start, time_stop, active) VALUES ($1, $2, null, null, true);`;
  return pool.query(queryString, [quiz_id, user_id]).then((response) => {
    return response.rows[0];
  });
};

const postUserAnswerToQuestion = (user_id, answer_id) => {
  const queryString = `INSERT INTO users_answers (user_id, answer_id, answer_timestamp, active) VALUES ($1, $2, null, true);`;
  return pool.query(queryString, [user_id, answer_id]).then((response) => {
    return response.rows[0];
  });
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  getUserTypeById,
};
