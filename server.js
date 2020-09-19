require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const quizRoutes = require('./routes/quiz-routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

//hands this routing off to cat-query-test and that file handles routes
app.use('/quiz', quizRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
