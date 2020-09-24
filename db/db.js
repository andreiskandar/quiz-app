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
  console.log('removed all listeners');
});

pool.on('end', function() {
  pool.end();
  console.log('closed database connection');
});

module.exports = pool;
