-- Drop and recreate responses table (Example)

DROP TABLE IF EXISTS responses CASCADE;
CREATE TABLE responses (
  id              SERIAL PRIMARY KEY NOT NULL,
  answer_id       INTEGER REFERENCES answers(id),
  user_id         INTEGER REFERENCES users(id),
  time_start      DATE NOT NULL,
  time_stop       DATE NOT NULL,
  active          BOOLEAN DEFAULT true
);
