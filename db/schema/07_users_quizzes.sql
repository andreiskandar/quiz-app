DROP TABLE IF EXISTS users_quizzes CASCADE;
CREATE TABLE users_quizzes (
  id            SERIAL PRIMARY KEY NOT NULL,
  quiz_id       INTEGER REFERENCES answers(id),
  user_id       INTEGER REFERENCES users(id),
  time_start    TIMESTAMP,
  time_stop     TIMESTAMP,
  active        BOOLEAN DEFAULT true
);
