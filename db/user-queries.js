//this file will ultimately serve as our users queries
const pool = require('./db');

const getUsers = () => {
  return pool.query('SELECT * FROM users;')
    .then((response) => {
      return response.rows;
    });
};

const getUserById = (id) => {
  return pool.query('SELECT * FROM users WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getUsers,
  getUserById
};
