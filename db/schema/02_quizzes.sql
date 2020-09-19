-- Drop and recreate quizzes table

DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE quizzes (
  id                SERIAL PRIMARY KEY NOT NULL,
  quiz_category_id  INTEGER,
  name              VARCHAR(255) NOT NULL,
  url_link          TEXT,
  pin               INTEGER,
  public            BOOLEAN DEFAULT true,
  time_limit        INTEGER,
  user_id           VARCHAR(255),
  active            BOOLEAN DEFAULT false
);
