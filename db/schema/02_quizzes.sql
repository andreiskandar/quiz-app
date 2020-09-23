-- Drop and recreate quizzes table

DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE quizzes (
  id                SERIAL PRIMARY KEY NOT NULL,
  quiz_category_id  INTEGER,
  name              VARCHAR(100) NOT NULL,
  description       VARCHAR(254),
  pin               INTEGER,
  public            BOOLEAN DEFAULT true,
  time_limit        INTEGER,
  image_url         TEXT,
  bg_image_url      TEXT,
  color             VARCHAR(40),
  user_id           VARCHAR(255),
  active            BOOLEAN DEFAULT false
);
