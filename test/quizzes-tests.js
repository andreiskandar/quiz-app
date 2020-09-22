require('dotenv').config();

const assert = require('chai').assert;
const expect = require('chai').expect;

const { getQuizzes, getQuizById, getQuizzesByUserId } = require('../db/queries/quiz-queries.js');

describe('Querying users table', () => {
  it('should return data', async function() {
    const response = await getQuizzes();
    assert.isNotEmpty(response,'Data not returned');
  })
})

describe('Querying quizzes table for a specific quiz', () => {
  it('should return quiz data for that quiz only', async function() {
    const response = await getQuizzes(47);
    assert.isNotEmpty(response,'Data not returned');
  })
})

describe('Querying quizzes table for quizzes belinging to a specific user', () => {
  it('should return quizes for that user only', async function() {
    const response = await getQuizzesByUserId(47);
    assert.isNotEmpty(response,'Data not returned');
  })
})
