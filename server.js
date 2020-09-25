require("dotenv").config();

const express = require("express");
// const morgan = require("morgan");
const bodyParser = require("body-parser");
const quizRoutes = require("./routes/public-quiz-routes");
const homeRoutes = require("./routes/get-home-routes");
const dashboardRoutes = require("./routes/get-dashboard");

const cookieSession = require("cookie-session");
const app = express();
const {
  getUserQuizIds,
  getQuestionsFromQuizIds,
  getTotalCorrectAnswers,
} = require("./db/queries/users_quizzes-queries");
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: [`${process.env.SECRET_KEY_1}`, `${process.env.SECRET_KEY_2}`],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: true,
    httpOnly: true,
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
app.use("/dashboard", dashboardRoutes);

// handles the routing for /quizzes and /quizzes/:id
app.use("/quizzes", quizRoutes);

app.get("/quiz/:quiz_id/questions/:question_id", (req, res) => {
  // const quiz_id = req.params.quiz_id;
  res.render("sharedLink");
});

app.get("/myResults/", (req, res) => {
  const { user_id } = req.session;
  res.redirect(`/result/${user_id}`);
});

app.get("/result/:user_id", (req, res) => {
  let templateVars = {};
  const user_id = req.params.user_id;
  getUserQuizIds(user_id)
    .then((quiz_ids) => {
      const ids = quiz_ids.map((entry) => entry.quiz_id);
      getQuestionsFromQuizIds(ids).then((quizzes) => {
        getTotalCorrectAnswers(user_id).then((data) => {
          templateVars = {
            data: quizzes.map((entry, idx) => {
              return {
                id: entry.id,
                name: entry.name,
                score: `${data[idx].tot_correct_answer} / ${entry.tot_questions}`,
                link: `http://localhost:3000/result/${user_id}`,
              };
            }),
          };
          console.log("templateVars:", templateVars);
          res.render("results", templateVars);
        });
      });
    })
    .catch((e) => console.error("getUserQuizIds error from router", e));
  // getQuestionsFromQuizId
});

app.get("/quiz/:quiz_id/result");

app.use("/login", homeRoutes);

app.get("/forbidden", (req, res) => {
  res.statusCode = 403;
  res.render("forbidden");
});

app.get("/*", (req, res) => {
  res.statusCode = 404;
  res.render("not-found");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
