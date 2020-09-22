const pool = require('../db.js');

//gets all available quizzes
const getQuizzes = (public, active) => {

  let published = 'all';
  let show = 'all';

  // public, private, all
  if (public === 'public') {
    show = 'WHERE public = true';
  } else if (public === 'private') {
    show = 'WHERE public = false';
  } else {
    show = '';
  }

  // active, inactive, all
  if (active === 'active') {
    published = ' AND active = true';
  } else if (active === 'inactive') {
    published = ' AND active = false';
  } else {
    published = '';
  }

  const sql = "SELECT * FROM quizzes " + show + published + ";";

  return pool.query(sql).then((response) => {
    return response.rows;
  });
};

//gets a singular quiz by id
const getQuizById = (id) => {
  return pool
    .query("SELECT * FROM quizzes WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

//gets all quizzes belonging to that user
const getQuizzesByUserId = (id) => {
  return pool
  .query("SELECT * FROM quizzes WHERE user_id = $1;", [id])
  .then((response) => {
    return response.rows;
  })
}

//gets all quizzes belonging to that user
const getAllActiveQuizzesData = (id) => {
  return pool
  .query("SELECT * FROM quizzes WHERE user_id = $1;", [id])
  .then((response) => {
    return response.rows;
  })
}

module.exports = {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId
};
