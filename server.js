require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const quizRoutes = require('./routes/quiz-routes');
const homeRoutes = require('./routes/get-home-routes');
const dashboardRoutes = require('./routes/get-dashboard');

const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
// Set public folder as root
app.use(express.static('public'));

app.set('view engine', 'ejs');

//Handles Login/Register or can re-direct to dashboard if logged in
app.use('/', homeRoutes);

//handles routing for dashboard or can re-direct to /LOGIN /REGISTER if not logged in
//check if user is logged in here?
app.use('/dashboard', dashboardRoutes);

// hands this routing off to cat-query-test and that file handles routes
app.use('/quiz', quizRoutes);
=======
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/users");
// const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// app.get("/", (req, res) => {
//   res.render("index");
// });
>>>>>>> index

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
