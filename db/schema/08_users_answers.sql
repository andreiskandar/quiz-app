-- Drop and recreate users_answers table (Example)

DROP TABLE IF EXISTS users_answers CASCADE;
CREATE TABLE users_answers (
  id                  SERIAL PRIMARY KEY NOT NULL,
  answer_id           INTEGER REFERENCES answers(id),
  user_id             INTEGER REFERENCES users(id),
  answer_timestamp    TIMESTAMP,
  active              BOOLEAN DEFAULT true
);
