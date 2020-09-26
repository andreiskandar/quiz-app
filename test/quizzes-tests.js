//require('dotenv').config();

const assert = require("chai").assert;

const {
  getQuizzes,
  getQuizById,
  getQuizzesByUserId,
  getThreeRandomQuizzes,
  getQuizQuestions,
  getAnswersForQuiz,
} = require("../db/queries/quiz-queries.js");

describe("get quizzes in quizzes table", () => {
  it("should return quiz table data for public quizzes which are active", async function () {
    const response = await getQuizzes("public", "active");
    assert.isNotEmpty(response, "Data not returned");
  });
  it("should return quiz table data for private quizzes which are active", async function () {
    const response = await getQuizzes("private", "active");
    assert.isNotEmpty(response, "Data not returned");
  });
  it("should return quiz table data for public quizzes which are inactive", async function () {
    const response = await getQuizzes("public", "inactive");
    assert.isNotEmpty(response, "Data not returned");
  });
  it("should return quiz table data for private quizzes which are inactive", async function () {
    const response = await getQuizzes("private", "inactive");
    assert.isNotEmpty(response, "Data not returned");
  });
  it("should return quiz table data for all records", async function () {
    const response = await getQuizzes("all", "all");
    assert.isNotEmpty(response, "Data not returned");
  });
});

describe("get quizzes in quizzes table by quizzes.id", () => {
  it("should return quiz data for that quiz.id only", async function () {
    const response = await getQuizById(1);
    assert.isNotEmpty(response, "Data not returned");
  });
  it("should return empty array if no records found for that quizzes.id", async function () {
    const response = await getQuizById(0);
    assert.isUndefined(response, "Data returned");
  });
});

describe("get quizzes belonging to a specific user_id", () => {
  it("should only return quizzes for that user.id only", async function () {
    const response = await getQuizzesByUserId(47);
    assert.isNotEmpty(response, "Data not returned");
  });
  it("should only return empty array if no quizzes found for that user.id only", async function () {
    const response = await getQuizzesByUserId(0);
    assert.isEmpty(response, "Data not returned");
  });
});

describe("get 3 of random public active quizzes", () => {
  it("should return 3 random public active quizzes", async function () {
    const numberOfQuizzes = 3;
    const response = await getThreeRandomQuizzes();
    assert.strictEqual(numberOfQuizzes, response.length);
  });
});

describe("get questions for a quiz id", () => {
  it("should return all questions for the specified quiz ID", async function () {
    const quizID = 11;
    const response = await getQuizQuestions(quizID, "active");
    assert.isNotEmpty(response, "Data not returned");
  });
  it("should return empty array for an invalid quiz ID", async function () {
    const quizID = 0;
    const response = await getQuizQuestions(quizID, "active");
    assert.isEmpty(response, "Expected no data but data returned");
  });
  it("should return active quizzes for a specified quiz ID", async function () {
    const quizID = 11;
    const response = await getQuizQuestions(quizID, "active");
    assert.isNotEmpty(response, "Data no returned");
  });
  it("should return inactive quizzes for a specified quiz ID", async function () {
    const quizID = 11;
    const response = await getQuizQuestions(quizID, "inactive");
    assert.isNotEmpty(response, "Data not returned");
  });
});

describe("get answers for questions for specified quiz ID", () => {
  it("should return answers for questions from a specified quiz ID", async function () {
    const quizID = 11;
    const response = await getAnswersForQuiz(quizID);
    assert.isNotEmpty(response, "Data not returned");
  });
  it("should return empty for questions from a specified quiz ID", async function () {
    const quizID = 0;
    const response = await getAnswersForQuiz(quizID);
    assert.isUndefined(response, "Data not returned");
  });
});
