const express = require('express');
const router = express.Router();
//we will replace this later
const { getUsers, getUserById } = require('../db/queries/user-queries');

//Don't think we need the middleware in this

// GET /quiz/
//these will not be cats once we have quiz data to generate
router.get('/', (req, res) => {
    res.render('create-new-quiz')
  });



module.exports = router;
