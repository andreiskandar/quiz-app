const pool = require("../db.js");

// gets answers for the current question
const getAnswersByQuestionId = (question_id) => {
  const queryString = `select * from answers where question_id = $1`;
  return pool.query(queryString, [question_id]).then((response) => {
    return response.rows;
  });
};

// get all quiz data for for a specified user
const getAllQuizDataForUser = (userID) => {

  const select = 'SELECT users_answers.user_id AS user_id, users.email AS user, quizzes.id AS quiz_id, quizzes.name AS quiz, questions.id AS question, questions.question AS question, answers.id AS answers_id, answers.answer AS answer,answers.correct_answer AS correct_answer ';
  const from = 'FROM answers, questions, quizzes, users, users_answers'
  const where = `WHERE answers.id = users_answers.answer_id AND answers.question_id = questions.id AND questions.quiz_id = quizzes.id AND users.id = users_answers.user_id AND users_answers.user_id = $1 `;
  const orderBy = 'ORDER BY quizzes.id;'

  const sql = select + from + where + orderBy;

  return pool.query(sql).then((response) => {
    return response.rows;
  });
}

module.exports = {
  getAnswersByQuestionId,
  getAllQuizDataForUser
};

/*

SELECT users_answers.user_id AS user_id, users.email AS user, quizzes.id AS quiz_id, quizzes.name AS quiz, questions.id AS question, questions.question AS question, answers.id AS answers_id, answers.answer AS answer,answers.correct_answer AS correct_answer
FROM answers, questions, quizzes, users, users_answers
WHERE answers.id = users_answers.answer_id AND answers.question_id = questions.id AND questions.quiz_id = quizzes.id AND users.id = users_answers.user_id AND users_answers.user_id = 5
ORDER BY quizzes.id
;

*/



// `select * from quizzes JOIN questions ON questions.quiz_id = quizzes.id JOIN answers on questions.id = answers.question_id where quizzes.user_id=$2 AND questions.id = $1`
