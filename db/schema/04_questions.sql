-- Drop and recreate questions table (Example)

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id                      SERIAL PRIMARY KEY NOT NULL,
  question_categories_id  INTEGER REFERENCES question_categories(id),
  question                TEXT NOT NULL,
  time_limit              INTEGER,
  user_id                 INTEGER,
  active                  BOOLEAN DEFAULT false
);


