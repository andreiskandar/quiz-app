require('dotenv').config();

const assert = require('chai').assert;
const expect = require('chai').expect;

const { getQuizzes, getQuizById, getQuizzesByUserId } = require('../db/queries/quiz-queries.js');

describe('Querying all quizzes in quizzes table', () => {
  it('should return quiz table data', async function() {
    const response = await getQuizzes();
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
