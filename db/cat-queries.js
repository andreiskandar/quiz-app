//We will migrate away from cats when we have actual quiz data to use!
//calls the entire file with a require
const pool = require('./db');

// client.query()

//query our cats
const getCats = (cb) => {
  pool.query('Select * FROM cats ORDER BY id;')
  .then((response) => {
    //when our promise resolves in the resolution we are then calling our callback with response.rows (our array of cats)
    cb(response.rows);
  })
};

//query our cats by ID
//99% of promises you will not create you just handle
const getCatById = (id) => {
  //return value from getGetById Function returning the entire promise
  return pool.query('SELECT * FROM cats where id = $1;', [id])
  //returning the response from our request
  .then((response) => {
    return response.rows[0];
  });
};

module.exports = {
  getCats,
  getCatById
};
