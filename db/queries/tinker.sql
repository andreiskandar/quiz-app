SELECT
  users.email AS user_name,
  quizzes.name AS quiz_name
FROM
  users
INNER JOIN users_answers
    ON users_answers.user_id = users.id
INNER JOIN answers
    ON answers.id = users_answers.quiz_id
WHERE answers.active = true AND users_answers.active = true;


SELECT
  quizzes.id AS quiz_id,
  quizzes.name AS quiz_name,
  answers.id AS answer_id,
  answers.answer AS answer
FROM
  answers
INNER JOIN quizzes
    ON quizzes.id = questions.quiz_id
INNER JOIN answers
    ON answers.id = users_answers.quiz_id
WHERE answers.active = true AND users_answers.active = true;

