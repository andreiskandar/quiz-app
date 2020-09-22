//this file will ultimately serve as our users queries
const pool = require("../db.js");

//get all users
const getUsers = () => {
  return pool.query("SELECT * FROM users;").then((response) => {
    return response.rows;
  });
};

//gets a user by ID number
const getUserById = (id) => {
  return pool
    .query("SELECT * FROM users WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

//get a user by email - this is used to specifically assign a session cookie
const getUserByEmail = (email) => {
<<<<<<< HEAD
  queryString = "SELECT id FROM users WHERE email = "
  queryString += "$1"
  queryString += ";"
  console.log(queryString)


  return pool.query(queryString, [email])
    .then((response) => {
      return response.rows[0];
    });
=======
  queryString = "SELECT id FROM users WHERE email = ";
  queryString += "$1";
  queryString += ";";

  return pool.query(queryString, [email]).then((response) => {
    return response.rows[0];
  });
>>>>>>> index
};

//get a user type (by email) - used to switch header
const getUserTypeById = (id) => {
  queryString = "SELECT * FROM users WHERE id = ";
  queryString += "$1";
  queryString += ";";

<<<<<<< HEAD
  return pool.query(queryString, [email])
    .then((response) => {
      return response.rows[0].is_teacher;
    });
=======
  return pool.query(queryString, [id]).then((response) => {
    return response.rows[0];
  });
>>>>>>> index
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  getUserTypeById,
};
