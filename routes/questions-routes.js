const express = require("express");
const router = express.Router();
//we will replace this later
const { getQuestions } = require("../db/queries/question-queries");

router.get("/test", (req, res) => {
  getQuestions()
    .then((questions) => {
      console.log("question router");
      res.send(questions);
    })
    .catch((e) => console.log("getQuestions from db", e));
});

module.exports = router;
