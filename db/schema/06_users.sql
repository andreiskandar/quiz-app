-- Drop and recreate users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id              SERIAL PRIMARY KEY NOT NULL,
  username        VARCHAR(255) NOT NULL,
  password        VARCHAR(255) NOT NULL,
  email           VARCHAR(255),
  nickname        VARCHAR(255),
  phone           INTEGER,
  profile_avatar  TEXT,
  is_teacher      BOOLEAN DEFAULT false,
  created_on      DATE DEFAULT NOW(),
  active          BOOLEAN DEFAULT true
);
