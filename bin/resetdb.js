// load .env data into process.env
require('dotenv').config();

// other dependencies
const fs = require('fs');
const chalk = require('chalk');
const pg = require('pg')
const Client = pg.Client;

// PG connection setup
const config = process.env.DATABASE_URL ||
  `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const client = new Client(config);

client
.connect(() => {
  runSchemaFiles();
  runSeedFiles();
})

setTimeout(() => {
client.end();
},5000)

// Loads the schema files from db/schema
const runSchemaFiles = function() {
  console.log(chalk.cyan(`-> Loading Schema Files ...`));
  const schemaFilenames = fs.readdirSync('./db/schema');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/schema/${fn}`, 'utf8');
    console.log(`\t-> Running ${chalk.green(fn)}`);
    client.query(sql);
  }
};

const runSeedFiles = function() {
  console.log(chalk.cyan(`-> Loading Seeds ...`));
  const schemaFilenames = fs.readdirSync('./db/seeds');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/seeds/${fn}`, 'utf8');
    console.log(`\t-> Running ${chalk.green(fn)}`);
    client.query(sql);
  }
};
