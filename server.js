require("dotenv").config();

<<<<<<< HEAD
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const quizRoutes = require("./routes/quiz-routes");
const homeRoutes = require("./routes/get-home-routes");
const dashboardRoutes = require("./routes/get-dashboard");
const questionRoutes = require("./routes/get-questions");

=======
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const quizRoutes = require('./routes/quiz-routes');
const homeRoutes = require('./routes/get-home-routes');
const dashboardRoutes = require('./routes/get-dashboard');
const cookieSession = require('cookie-session');
>>>>>>> master
const app = express();

<<<<<<< HEAD
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
=======
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieSession({
  name: 'session',
  keys: [`${process.env.SECRET_KEY_1}`, `${process.env.SECRET_KEY_2}`],
 // Cookie Options
 maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

const port = process.env.PORT || 3000;

>>>>>>> master
// Set public folder as root
app.use(express.static("public"));

app.set("view engine", "ejs");

//Handles Login/Register or can re-direct to dashboard if logged in
app.use("/", homeRoutes);

//handles routing for dashboard or can re-direct to /LOGIN /REGISTER if not logged in
//check if user is logged in here?
app.use("/dashboard", dashboardRoutes);

// hands this routing off to cat-query-test and that file handles routes
<<<<<<< HEAD
// app.use("/quiz", quizRoutes);
=======
<<<<<<< HEAD
app.use("/quiz", quizRoutes);
=======
app.use('/quiz', quizRoutes);

app.get('/*', (req, res) => {
res.statusCode = 404;
res.render('not-found');
});



>>>>>>> master
>>>>>>> index

app.use("/questions", questionRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
