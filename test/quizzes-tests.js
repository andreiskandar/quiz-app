require('dotenv').config();

const assert = require('chai').assert;
const expect = require('chai').expect;

const { getQuizzes, getQuizById, getQuizzesByUserId } = require('../db/queries/quiz-queries.js');

describe('Querying quizzes in quizzes table', () => {
  it('should return quiz table data of public quizzes which are active', async function() {
    const response = await getQuizzes('public', 'active');
    assert.isNotEmpty(response,'Data not returned');
  })
  it('should return quiz table data for private quizzes which are active', async function() {
    const response = await getQuizzes('private', 'active');
    assert.isNotEmpty(response,'Data not returned');
  })
  it('should return quiz table data for public quizzes which are inactive', async function() {
    const response = await getQuizzes('public', 'inactive');
    assert.isNotEmpty(response,'Data not returned');
  })
  it('should return quiz table data for private quizzes which are inactive', async function() {
    const response = await getQuizzes('private', 'inactive');
    assert.isNotEmpty(response,'Data not returned');
  })
  it('should return quiz table data for all records', async function() {
    const response = await getQuizzes('all', 'all');
    assert.isNotEmpty(response,'Data not returned');
  })
})

describe('Querying quizzes table for a specific quiz by quizzes.id', () => {
  it('should return quiz data for that quiz.id only', async function() {
    const response = await getQuizById(2);
    assert.isNotEmpty(response,'Data not returned');
  })
})

describe('Querying quizzes table for quizzes belonging to a specific users.id', () => {
  it('should only return quizzes for that user.id only', async function() {
    const response = await getQuizzesByUserId(47);
    assert.isNotEmpty(response,'Data not returned');
  })
})
