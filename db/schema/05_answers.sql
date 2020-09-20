-- Drop and recreate answers table (Example)

DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id              SERIAL PRIMARY KEY NOT NULL,
  question_id     INTEGER;
  answer          TEXT NOT NULL,
  correct_answer  BOOLEAN,
<<<<<<< HEAD
  bg_image        TEXT,
=======
  sort_order      INTEGER,
  img_link        TEXT,
  bg_image_url    TEXT,
>>>>>>> 4119bc8e37d69a4ac206d047cc41751f233d9ba2
  color           VARCHAR(40),
  user_id         INTEGER,
  active          BOOLEAN DEFAULT false
);

