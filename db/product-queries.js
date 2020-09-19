<<<<<<< HEAD
//keep these files in for now as examples for when we implement our queries
const db = require('./db');
=======
const db = require("./db");
>>>>>>> index

const getProducts = () => {
  return db.query("SELECT * FROM products;").then((response) => {
    return response.rows;
  });
};

const getProductById = (id) => {
  return db
    .query("SELECT * FROM products WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getProducts,
  getProductById,
};
