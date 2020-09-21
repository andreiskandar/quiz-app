-- Drop and recreate quiz_category table

DROP TABLE IF EXISTS quiz_categories CASCADE;
CREATE TABLE quiz_categories (
  id                SERIAL PRIMARY KEY NOT NULL,
  name              VARCHAR(255) NOT NULL,
  image_url         TEXT,
  bg_image_url      TEXT,
  color             varchar(40),
  user_id           VARCHAR(255),
  active            BOOLEAN DEFAULT false
);
