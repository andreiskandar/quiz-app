const pool = require('./db');

const getProducts = () => {
  return pool.query("SELECT * FROM products;").then((response) => {
    return response.rows;
  });
};

const getProductById = (id) => {
  return pool
    .query("SELECT * FROM products WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getProducts,
  getProductById,
};
