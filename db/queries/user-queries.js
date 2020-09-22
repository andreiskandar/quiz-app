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
  queryString = "SELECT id FROM users WHERE email = ";
  queryString += "$1";
  queryString += ";";
  console.log(queryString);

  return pool.query(queryString, [email]).then((response) => {
    return response.rows[0];
  });
};

//get a user type (by email) - used to switch header
const getUserType = (email) => {
  queryString = "SELECT * FROM users WHERE email = ";
  queryString += "$1";
  queryString += ";";

  return pool.query(queryString, [email]).then((response) => {
    console.log(response.row[0]);
    return response.rows[0].is_teacher;
  });
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  getUserType,
};
