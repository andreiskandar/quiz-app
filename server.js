<<<<<<< HEAD
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const quizRoutes = require('./routes/public-quiz-routes');
const homeRoutes = require('./routes/get-home-routes');
const dashboardRoutes = require('./routes/get-dashboard');
const cookieSession = require('cookie-session');
=======
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const quizRoutes = require("./routes/quiz-routes");
const homeRoutes = require("./routes/get-home-routes");
const dashboardRoutes = require("./routes/get-dashboard");
const cookieSession = require("cookie-session");
>>>>>>> 609528daf4e845253bda62bd95e5bf4521c4e5ee
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: [`${process.env.SECRET_KEY_1}`, `${process.env.SECRET_KEY_2}`],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

const port = process.env.PORT || 3000;
// Set public folder as root
app.use(express.static("public"));
app.set("view engine", "ejs");
//Handles Login/Register or can re-direct to dashboard if logged in
app.use("/", homeRoutes);
//handles routing for dashboard or can re-direct to /LOGIN /REGISTER if not logged in
//check if user is logged in here?
<<<<<<< HEAD
app.use('/dashboard', dashboardRoutes);

// handles the routing for /quizzes and /quizzes/:id
app.use('/quizzes', quizRoutes);

app.get('/*', (req, res) => {
res.statusCode = 404;
res.render('not-found');
=======
app.use("/dashboard", dashboardRoutes);
// hands this routing off to cat-query-test and that file handles routes
app.use("/quiz", quizRoutes);
app.get("/*", (req, res) => {
  res.statusCode = 404;
  res.render("not-found");
>>>>>>> 609528daf4e845253bda62bd95e5bf4521c4e5ee
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
