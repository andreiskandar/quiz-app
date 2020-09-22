const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

// const client = new Client(config);

pool.connect(() => {
  console.log('connected to database');
});

pool.on('close', () => {
  pool.removeAllListeners();
});

pool.on('end', function() {
  pool.end();
});

module.exports = pool;
