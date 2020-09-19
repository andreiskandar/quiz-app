DROP TABLE IF EXISTS users_quizzes CASCADE;
CREATE TABLE users_quizzes (
  id              SERIAL PRIMARY KEY NOT NULL,
  answer_id       INTEGER REFERENCES answers(id),
  user_id         INTEGER REFERENCES users(id),
  time_start      DATE NOT NULL,
  time_stop       DATE NOT NULL,
  active          BOOLEAN DEFAULT true
);
