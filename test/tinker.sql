SELECT DISTINCT
  quizzes.id AS quizzes_id,
  quizzes.name As quiz_name,
  quizzes.public AS quiz_public,
  quizzes.active AS quiz_active,
  questions.id AS question_id,
  questions.question AS question,
  questions.hint AS question_hint,
  questions.active AS question_active,
  answers.id AS answer_id,
  answers.answer AS answer,
  answers.correct_answer AS answer_correct,
  answers.active AS answer_active,
  users.id AS user_id,
  users.email AS user_email,
  users.active AS user_active
FROM
  answers, quizzes --, users_answers
INNER JOIN users_quizzes
  ON quizzes.id = users_quizzes.quiz_id
INNER JOIN questions
  ON  questions.quiz_id = quizzes.id
INNER JOIN users
  ON users.id = users_quizzes.user_id
--INNER JOIN answers
  --ON users_answers.user_id = users.id
;

