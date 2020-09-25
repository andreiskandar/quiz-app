const pool = require("../db");

const postUserAnswerToQuiz = (quiz_id, user_id) => {
  const queryString = `INSERT INTO users_quizzes (quiz_id, user_id, time_start, time_stop, active) VALUES ($1, $2, null, null, true)  RETURNING *;;`;
  return pool.query(queryString, [quiz_id, user_id]).then((response) => {
    return response.rows[0];
  });
};

const getUserQuizIds = (user_id) => {
  const queryString = "SELECT id FROM users_quizzes WHERE user_id = $1";
  return pool.query(queryString, [user_id]).then((res) => res.rows);
};

const getQuizzesByQuizIds = (quiz_ids) => {
  const ids = `${quiz_ids}`;
  console.log("ids:", ids);
  const queryString = "SELECT * FROM quizzes WHERE id IN $1";
  return pool.query(queryString, [ids]).then((res) => res.rows);
};

const getQuestionsFromQuizIds = (quiz_ids) => {
  //questions = SELECT id FROM questions WHERE quiz_id = quizzes
  const queryString = "SELECT id FROM questions WHERE quiz_id IN $1";
  return pool.query(queryString, [quiz_ids]).then((res) => res.rows);
};
module.exports = {
  postUserAnswerToQuiz,
  getUserQuizIds,
  getQuestionsFromQuizIds,
  getQuizzesByQuizIds,
};
