-- Drop and recreate question_categories table (Example)

DROP TABLE IF EXISTS question_categories CASCADE;
CREATE TABLE question_categories (
  id        SERIAL PRIMARY KEY NOT NULL,
  name      VARCHAR(255) NOT NULL,
  user_id   INTEGER,
  active    BOOLEAN DEFAULT false,
<<<<<<< HEAD
  img_link  TEXT,
=======
  img_link_url  TEXT,
  bg_image_url TEXT,
>>>>>>> db_setup
  color     VARCHAR(40)
);
