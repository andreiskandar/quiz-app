const express = require("express");
const router = express.Router();
//we will replace this later
const { getAnswersByQuestionId } = require("../db/queries/answer-queries");

//Don't think we need the middleware in this

// GET /quiz/
//these will not be cats once we have quiz data to generate
router.get("/:id", (req, res) => {
  const question_id = req.params.id;
  getAnswersByQuestionId(question_id)
    .then((answers) => {
      res.send(answers);
    })
    .catch((e) => console.log("getAnswerByQuestionId from db", e));
});

router.post("/create", (req, res) => {});

module.exports = router;
