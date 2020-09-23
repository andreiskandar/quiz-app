const pool = require("../db");

const postUserAnswerToQuestion = (user_id, answer_id) => {
  const queryString = `INSERT INTO users_answers (user_id, answer_id, answer_timestamp, active) VALUES ($1, $2, null, true) RETURNING *;`;
  return pool.query(queryString, [user_id, answer_id]).then((response) => {
    return response.rows[0];
  });
};

module.exports = { postUserAnswerToQuestion };
