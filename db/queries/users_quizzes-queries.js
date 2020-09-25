const pool = require("../db");

const postUserAnswerToQuiz = (quiz_id, user_id) => {
  const queryString = `INSERT INTO users_quizzes (quiz_id, user_id, time_start, time_stop, active) VALUES ($1, $2, null, null, true) RETURNING *;`;
  return pool.query(queryString, [quiz_id, user_id]).then((response) => {
    return response.rows[0];
  });
};

const getUserQuizIds = (user_id) => {
  console.log('user_id:', user_id)
  const queryString = "SELECT quiz_id FROM users_quizzes WHERE user_id = $1";
  return pool.query(queryString, [user_id]).then((res) => res.rows);
};

const getQuestionsFromQuizIds = (quiz_ids) => {
  const queryString = `
  SELECT quizzes.name as name, count(*) as tot_questions, quizzes.id as id
  FROM questions
  JOIN quizzes ON questions.quiz_id = quizzes.id
  WHERE quizzes.id IN (${quiz_ids.join(", ")})
  GROUP BY quizzes.id`;
  return pool.query(queryString).then((res) => res.rows);
};

const getTotalCorrectAnswers = (user_id) => {
  console.log("in getTotalCorrectAnswers: ", user_id)
  const queryString = `
    SELECT count(answers.*) as tot_correct_answer,
    quizzes.id as quiz_id
    FROM answers
    JOIN questions ON answers.question_id = questions.id
    JOIN quizzes ON quizzes.id = questions.quiz_id
    JOIN users_answers ON users_answers.answer_id = answers.id
    JOIN users ON users.id = users_answers.user_id
    WHERE users.id = $1 AND answers.correct_answer = true
    GROUP BY quizzes.id
  `;
  return pool.query(queryString, [user_id]).then((res) => res.rows);
};
module.exports = {
  postUserAnswerToQuiz,
  getUserQuizIds,
  getQuestionsFromQuizIds,
  getTotalCorrectAnswers,
};
