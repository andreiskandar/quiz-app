const pool = require("../db.js");

//insert quiz into quizzes table
const insertQuizIntoQuizzes = (request, user_id) => {
  const quiz_category_id = 5;
  const name = request.category;
  const description = "user created quiz";
  const url_link = "localhost://3000/";
  const pin = 123456;
  const public = true;
  const time_limit = 600;
  const active = true;
  const queryString = `INSERT INTO quizzes (quiz_category_id, name, description, url_link, pin, public, time_limit , user_id, active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`;
  return pool
    .query(queryString, [
      quiz_category_id,
      name,
      description,
      url_link,
      pin,
      public,
      time_limit,
      user_id,
      active,
    ])
    .then((response) => {
      return response.rows;
    });
};

//insert into questions table
const insertQuestionIntoQuestionsTable = (request, user_id) => {
  const question = request.question;
  const hint = "add user hint here";
  const sort_order = request.questionSortOrder;
  const img_link_url = "https://picsum.photos/200/300";
  const bg_image_url = "https://picsum.photos/200/300";
  //user_id

  const queryString = `INSERT INTO questions (quiz_id, question_category_id, question, hint, sort_order, time_limit, bg_image_url, color, user_id, active) VALUES (14, null, $1, $2, $3, null, $4, null, $5, true) RETURNING *;`;
  return pool
    .query(queryString, [question, hint, sort_order, bg_image_url, user_id])
    .then((response) => {
      return response.rows;
    });
};

const insertAnswersIntoAnswersTable = (request, user_id, question_id) => {
  const { a1, sortOrder1, correctAnswer1 } = request;
  const { a2, sortOrder2, correctAnswer2 } = request;
  const { a3, sortOrder3, correctAnswer3 } = request;
  const { a4, sortOrder4, correctAnswer4 } = request;

  answer_explanation = "user explanation";
  const queryString = `INSERT INTO answers (question_id, answer, correct_answer, answer_explanation, sort_order, img_url, bg_image_url, color, user_id, active)
                                    VALUES ($1,          $2,         $3,                null,            $4,       null,     null,       null,   $5,     true) RETURNING *;`;

  return pool
    .query(queryString, [
      question_id,
      a1 || a2 || a3 || a4,
      correctAnswer1 || correctAnswer2 || correctAnswer3 || correctAnswer4,
      sortOrder1 || sortOrder2 || sortOrder3 || sortOrder4,
      user_id,
    ])
    .then((response) => {
      return response.rows;
    });
};

module.exports = {
  insertQuizIntoQuizzes,
  insertQuestionIntoQuestionsTable,
  insertAnswersIntoAnswersTable,
};
