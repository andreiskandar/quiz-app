const pool = require("../db.js");

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
  console.log(sql);
}
// gets a specified number of random quizzes.ids
// specified total shouldn't be larger than the
// available total of public and active quizzes
const getThreeRandomQuizzes = () => {

  const validIDs = [2, 11, 12, 13];
  const numOfIdsToGet = 3;
  let randomIDs = [];

  // retrieve random ID, add to the return array and
  // splice the ID from the lookup list to prevent duplication
  for (let i = 0; i < numOfIdsToGet; i++) {
    const length = validIDs.length;
    const randomInt = Math.floor((Math.random() * (length)));
    const quizID = validIDs[randomInt];
    randomIDs.push(quizID);
    validIDs.splice(randomInt, 1);
  }
  return randomIDs;
}

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
    });
};

//gets all quizzes belonging to that user
const getAllActiveQuizzesData = (id) => {
  return pool
    .query("SELECT * FROM quizzes WHERE user_id = $1;", [id])
    .then((response) => {
      return response.rows;
    });
};

const getFirstQuestionIdByQuizId = (quiz_id) => {
  return pool.query(`select questions.id from questions JOIN quizzes ON quizzes.id = questions.quiz_id WHERE quizzes.id = $1 LIMIT 1`, [quiz_id])
  .then((response) => {
    return response.rows;
  })
}

module.exports = {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId,
  getAllActiveQuizzesData,
  getThreeRandomQuizzes,
  getFirstQuestionIdByQuizId
};
