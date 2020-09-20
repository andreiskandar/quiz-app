-- Drop and recreate answers table (Example)

DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id              SERIAL PRIMARY KEY NOT NULL,
  question_id     INTEGER REFERENCES questions(id),
  answer          TEXT NOT NULL,
  correct_answer  BOOLEAN,
  bg_image        TEXT,
  color           VARCHAR(40)
  user_id         INTEGER,
  active          BOOLEAN DEFAULT false
);

