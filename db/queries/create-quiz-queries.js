const pool = require("../db.js");

//insert quiz into quizzes table
const insertQuizIntoQuizzes = (request, user_id) => {
  const quiz_category_id = 5;
  const name = request.category;
  const description = 'user created quiz';
  const url_link = 'localhost://3000/'
  const pin = 123456
  const public = true;
  const time_limit = 600;
  const active = true;
  const queryString = `INSERT INTO quizzes (quiz_category_id, name, description, url_link, pin, public, time_limit , user_id, active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`
  return pool.query(queryString, [quiz_category_id, name, description, url_link, pin, public, time_limit, user_id, active]).then((response) => {
    return response.rows;

})
};

//insert into questions table
const insertQuestionIntoQuestionsTable = () => {
  const queryString = `INSERT INTO questions (quiz_id, question_category_id, question, hint, sort_order, time_limit, bg_image_url, color, user_id, active) VALUES (2, null, 'Which would take priority, an id (#my-id) in a CSS file or inline styling (style="...")?', 'Inside scoop...', 1, null, null, null, 47, true) RETURNING *;`
  return pool.query(queryString, [question_id]).then((response) => {
    return response.rows;
})
};

//insert into answers table
const insertAnswersIntoAnswersTable = () => {
  const queryString = `INSERT INTO answers (question_id, answer, correct_answer, answer_explanation, sort_order, img_url, bg_image_url, color, user_id, active) VALUES (1, 'Depends on what style that it is applying', false, null, 1, null, null, null, 47, true) RETURNING *;`
  return pool.query(queryString, [question_id]).then((response) => {
    return response.rows;
})
};

module.exports = {
  insertQuizIntoQuizzes,
  insertQuestionIntoQuestionsTable,
  insertAnswersIntoAnswersTable
};
