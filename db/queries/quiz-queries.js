const pool = require("../db.js");

// gets all available quizzes
const getQuizzes = (public, active) => {
  let published = "";
  let show = "";

  // public, private, all
  if (public === "public") {
    show = "WHERE public = true";
  } else if (public === "private") {
    show = "WHERE public = false";
  }

  // active, inactive, all
  if (active === "active") {
    published = " AND active = true";
  } else if (active === "inactive") {
    published = " AND active = false";
  }

  const sql = "SELECT * FROM quizzes " + show + published + ";";

  return pool.query(sql).then((response) => {
    return response.rows;
  });
};
// gets a specified number of random quizzes.ids
// specified total shouldn't be larger than the
// available total of public and active quizzes
const getThreeRandomQuizzes = () => {
  return pool
    .query(
      "SELECT * FROM quizzes WHERE public = true AND active = true ORDER BY RANDOM() LIMIT 3;"
    )
    .then((response) => {
      return response.rows;
    });
};

//gets a singular quiz by id
const getQuizById = (quiz_id) => {
  return pool
    .query("SELECT * FROM quizzes WHERE id = $1", [quiz_id])
    .then((response) => {
      console.log('in getQuizbyID')
      return response.rows[0];
    });
};

// there is a sort_order column which can be used for this
const getFirstQuestionIdByQuizId = (quiz_id) => {
  return pool
    .query(
      `select questions.id from questions JOIN quizzes ON quizzes.id = questions.quiz_id WHERE quizzes.id = $1 LIMIT 1`,
      [quiz_id]
    )
    .then((response) => {
      return response.rows;
    });
};

// get questions for quizzes
const getQuizQuestions = (quiz_id, active) => {
  let activeQuiz = "";

  if (active === "active") {
    activeQuiz = " AND questions.active = true;";
  } else if (activeQuiz === "inactive") {
    activeQuiz = " AND questions.active = false;";
  }

  // build and execute SQL statement
  const sql =
    "SELECT * FROM questions INNER JOIN quizzes ON quizzes.id = questions.quiz_id WHERE questions.quiz_id = " +
    quiz_id +
    activeQuiz;
  return pool.query(sql).then((response) => {
    return response.rows;
  });
};

// get answers for questions from quizzes
const getAnswersForQuiz = (quiz_id) => {
  return pool.query(
    "SELECT * FROM answers INNER JOIN questions ON answers.question_id = questions.id INNER JOIN quizzes ON questions.quiz_id = quizzes.id WHERE questions.quiz_id = $1",
    [quiz_id]
  );
};
//gets all quizzes belonging to that user
const getQuizzesByUserId = (user_id) => {
  console.log('user_id:', user_id)
  return pool
    .query("SELECT * FROM quizzes WHERE user_id = $1;", [user_id])
    .then((response) => {
      return response.rows;
    });
};

//gets all quizzes belonging to that user
const getAllActiveQuizzesData = (quiz_id) => {
  return pool
    .query("SELECT * FROM quizzes WHERE user_id = $1;", [quiz_id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId,
  getThreeRandomQuizzes,
  getFirstQuestionIdByQuizId,
  getQuizQuestions,
  getAnswersForQuiz,
  getAllActiveQuizzesData
};
