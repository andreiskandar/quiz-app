const pool = require("../db");

const postUserAnswerToQuiz = (quiz_id, user_id) => {
  const queryString = `INSERT INTO users_quizzes (quiz_id, user_id, time_start, time_stop, active) VALUES ($1, $2, null, null, true)  RETURNING *;;`;
  return pool.query(queryString, [quiz_id, user_id]).then((response) => {
    return response.rows[0];
  });
};
module.exports = { postUserAnswerToQuiz };
