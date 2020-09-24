-- Drop and recreate users_answers table (Example)

DROP TABLE IF EXISTS users_answers CASCADE;
CREATE TABLE users_answers (
  id                  SERIAL PRIMARY KEY NOT NULL,
  user_id             INTEGER REFERENCES users(id),
  answer_id           INTEGER REFERENCES answers(id),
  answer_timestamp    TIMESTAMP DEFAULT now(),
  active              BOOLEAN DEFAULT true
);
