const express = require("express");
const router = express.Router();

//we will replace this later
const {
  getUsers,
  getUserById,
  getUserByEmail,
  getUserTypeById,
} = require("../db/queries/user-queries");
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
//we don't specifically need to handle user authentication as a requirement but we may do it later!
router.get("/", (req, res) => {
  const id = req.session.id;
  console.log("id:", id);
  if (!id) {
    res.send({ message: "not logged in" });
    return;
  }

  getUserTypeById(id)
    .then((user) => {
      if (!user) {
        res.send({ error: "no user with that id" });
        return;
      }
      res.send(user);
    })
    .catch((e) => {
      console.log("getUserType from get-home-routes.js");
      res.send(e);
    });

  //may need to pop in a function here to authenticate our "fake" users
  // res.render("home");
});
// router.get("/login", (req, res) => {
//   //may need to pop in a function here to authenticate our "fake" users
//   res.render("home");
// });
//checks if just our users email exists in the db //posts to /LOGIN
router.post("/", (req, res) => {
  const { email } = req.body;
  getUserByEmail(email).then((user) => {
    req.session.id = user.id;
    res.redirect("/");
  });
});
// router.get('/', (req, res) => {
//   res.sendFile(__dirname+'/public/index.html');
// })
//logout
//clear cookies and userURLS on logout
router.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/login");
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Registration Routes //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/register", (req, res) => {
  //may need to pop in a function here to authenticate our "fake" users
  res.render("home");
});
module.exports = router;
