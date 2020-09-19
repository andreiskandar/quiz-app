-- Drop and recreate quiz_category table

DROP TABLE IF EXISTS quiz_categories CASCADE;
CREATE TABLE quiz_categories (
  id                SERIAL PRIMARY KEY NOT NULL,
  name              VARCHAR(255) NOT NULL,
  user_id           VARCHAR(255),
  active            BOOLEAN DEFAULT false
);
