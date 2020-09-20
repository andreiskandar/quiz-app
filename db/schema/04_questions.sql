-- Drop and recreate questions table (Example)

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id                      SERIAL PRIMARY KEY NOT NULL,
  question_category_id    INTEGER,
  question                TEXT NOT NULL,
  sort_order              INTEGER,
  time_limit              INTEGER,
  bg_image_url            TEXT,
  color                   VARCHAR(40),
  user_id                 INTEGER,
  active                  BOOLEAN DEFAULT false
);


