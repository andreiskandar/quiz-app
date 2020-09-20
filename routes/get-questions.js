const express = require("express");
const router = express.Router();
//we will replace this later
const { getCats, getCatById } = require("../db/queries/cat-queries");

// const { getProductById, getProducts } = require('../db/product-queries');
// add middleware
router.use((req, res, next) => {
  // if (!req.session.user_id) {
  //   return res.redirect('/login');
  // }
  console.log("product middleware called");
  next();
});
// GET /quiz/
//these will not be cats once we have quiz data to generate
router.get("/a", (req, res) => {
  getCats((cats) => {
    res.render("question_form", {});
  });
});

//GET /quiz/:id
//these will not be cats once we have quiz data to generate
router.get("/:id", (req, res) => {
  getCatById(req.params.id).then((cat) => {
    res.render("quiz", { cat });
  });
});

module.exports = router;
