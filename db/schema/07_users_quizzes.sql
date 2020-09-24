DROP TABLE IF EXISTS users_quizzes CASCADE;
CREATE TABLE users_quizzes (
  id            SERIAL PRIMARY KEY NOT NULL,
  user_id       INTEGER REFERENCES users(id),
  quiz_id       INTEGER REFERENCES answers(id),
  time_start    TIMESTAMP DEFAULT now(),
  time_stop     TIMESTAMP,
  active        BOOLEAN DEFAULT true
);
