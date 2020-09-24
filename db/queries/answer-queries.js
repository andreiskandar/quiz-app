const pool = require("../db.js");

//gets answers for the current question
const getAnswersByQuestionId = (question_id) => {
  console.log("in get answers by qud :", question_id)
  const queryString = `select * from answers where question_id = $1`;
  return pool.query(queryString, [question_id]).then((response) => {
    return response.rows;
  });
};

const getUsersMostRecentAttempt = (userID) => {

  const queryString = `select * from answers where question_id = $1`;
  return pool.query(queryString, [question_id]).then((response) => {
    return response.rows;
  });
}

module.exports = {
  getAnswersByQuestionId,
};


// `select * from quizzes JOIN questions ON questions.quiz_id = quizzes.id JOIN answers on questions.id = answers.question_id where quizzes.user_id=$2 AND questions.id = $1`
