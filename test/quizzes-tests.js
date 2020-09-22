const assert = require('chai').assert;
const expect = require('chai').expect;

const { getQuizzes, getQuizById, getQuizzesByUserId } = require('../db/queries/quiz-queries.js');

describe('Connected to the database', function() {
  it('should return an active database connection', function() {
    console.log('connected SOF');
    const pool = require('../db/db.js');
    assert.isNotEmpty(pool,'No database connection');
  });
});

describe('Querying users table', () => {
  it('should return data', async function() {
    console.log('data in users table');
    await getQuizzes();
    assert.isNotEmpty(results,'Data not returned');
  })
})
