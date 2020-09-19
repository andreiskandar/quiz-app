const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Set public folder as root
app.use(express.static("public"));

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index", {});
// });

app.listen(PORT, () => {
  console.log("Quiz app listening on port: " + PORT);
});
