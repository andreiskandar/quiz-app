const pool = require("../db.js");

//insert quiz into quizzes table
const insertQuizIntoQuizzes = () => {
  const queryString = `INSERT INTO quizzes (quiz_category_id, name, description, url_link, pin, public, time_limit , user_id, active) VALUES (1, 'CSS', 'How do we style HTML and make it look nice?', 'https://web.compass.lighthouselabs.ca/quizzes/34/quiz_submissions/new?activity_id=316', 123456, true, 600, 47, true);`
  return pool.query(queryString, [question_id]).then((response) => {
    return response.rows;

})
};

//insert into questions table
const insertQuestionIntoQuestionsTable = () => {
  const queryString = `INSERT INTO questions (quiz_id, question_category_id, question, hint, sort_order, time_limit, bg_image_url, color, user_id, active) VALUES (2, null, 'Which would take priority, an id (#my-id) in a CSS file or inline styling (style="...")?', 'Inside scoop...', 1, null, null, null, 47, true);`
  return pool.query(queryString, [question_id]).then((response) => {
    return response.rows;
})
};

//insert into answers table
const insertAnswersIntoAnswersTable = () => {
  const queryString = `INSERT INTO answers (question_id, answer, correct_answer, answer_explanation, sort_order, img_url, bg_image_url, color, user_id, active) VALUES (1, 'Depends on what style that it is applying', false, null, 1, null, null, null, 47, true);`
  return pool.query(queryString, [question_id]).then((response) => {
    return response.rows;
})
};

module.exports = {
  insertQuizIntoQuizzes,
  insertQuestionIntoQuestionsTable,
  insertAnswersIntoAnswersTable
};
