require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const quizRoutes = require("./routes/quiz-routes");
const homeRoutes = require("./routes/get-home-routes");
const dashboardRoutes = require("./routes/get-dashboard");
const questionRoutes = require("./routes/get-questions");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
// Set public folder as root
app.use(express.static("public"));

app.set("view engine", "ejs");

//Handles Login/Register or can re-direct to dashboard if logged in
app.use("/", homeRoutes);

//handles routing for dashboard or can re-direct to /LOGIN /REGISTER if not logged in
//check if user is logged in here?
app.use("/dashboard", dashboardRoutes);

// hands this routing off to cat-query-test and that file handles routes
// app.use("/quiz", quizRoutes);

app.use("/questions", questionRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
