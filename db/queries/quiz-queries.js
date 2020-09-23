const pool = require('../db.js');

// gets all available quizzes
const getQuizzes = (public, active) => {

  let published = '';
  let show = '';

  // public, private, all
  if (public === 'public') {
    show = 'WHERE public = true';
  } else if (public === 'private') {
    show = 'WHERE public = false';
  }

  // active, inactive, all
  if (active === 'active') {
    published = ' AND active = true';
  } else if (active === 'inactive') {
    published = ' AND active = false';
  }

  const sql = "SELECT * FROM quizzes " + show + published + ";";

  return pool.query(sql).then((response) => {
    return response.rows;
  });
};

// gets a singular quiz by quizzes.id
const getQuizById = (id) => {
  return pool
    .query("SELECT * FROM quizzes WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

// gets all quizzes belonging to that user_ID
const getQuizzesByUserId = (user_ID) => {

  // add public and active filters

  // build and execute SQL statement
  const sql = "SELECT * FROM quizzes WHERE user_id = '" + user_ID + "';";
  return pool.query(sql).then((response) => {
    return response.rows;
  });
}

// get questions for quizzes
const getQuizQuestions = (quiz_id, active) => {

  let activeQuiz = '';

  if (active === 'active') {
    activeQuiz = " AND questions.active = true;";
  } else if (activeQuiz === 'inactive') {
    activeQuiz =  " AND questions.active = false;";
  }

  // build and execute SQL statement
  const sql = "SELECT * FROM questions INNER JOIN quizzes ON quizzes.id = questions.quiz_id WHERE questions.quiz_id = " + quiz_id + activeQuiz;
  return pool.query(sql).then((response) => {
    return response.rows;
  });
}

// get answers for questions from quizzes
const getAnswersForQuiz = (quiz_id) => {
  return pool
    .query("SELECT * FROM answers INNER JOIN questions ON answers.question_id = questions.id INNER JOIN quizzes ON questions.quiz_id = quizzes.id WHERE questions.quiz_id = $1", [quiz_id])
    .then((response) => {
      return response.rows[0];
    });
}

// gets a specified number of random quizzes.ids
// specified total shouldn't be larger than the
// available total of public and active quizzes
const getRandomQuizzes = (total) => {

  const validIDs = [2, 11, 12, 13];
  const numOfIdsToGet = total;
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

module.exports = {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId,
  getRandomQuizzes,
  getQuizQuestions,
  getAnswersForQuiz
};
