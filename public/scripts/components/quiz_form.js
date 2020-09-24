const setQuestionCompletedToLS = (num_completed_questions) => {
  return localStorage.setItem(
    "num_completed_questions",
    num_completed_questions
  );
};

const getNumberQuestionCompletedFromLS = () => {
  return localStorage.getItem("num_completed_questions");
};

const setCorrectAnswerIdToLS = (correct_answer_id) => {
  return localStorage.setItem("correct_answer_id", correct_answer_id);
};

const getCorrectAnswerIdFromLS = () => {
  return localStorage.getItem("correct_answer_id");
};

const setTotalQuestionToLS = (totalQuestions) => {
  return localStorage.setItem("totalQuestions", totalQuestions);
};

const getTotalQuestionFromLS = () => {
  return localStorage.getItem("totalQuestions");
};

const updateQuiz = () => {
  const quiz_id_update = localStorage.getItem("quiz_id");
  const question_id_update = localStorage.getItem("question_id");
  return [quiz_id_update, question_id_update];
};

const createQuestionAndAnswersDOMElement = (quiz_id, question_id) => {
  const getQuestionURL = `/quizzes/${quiz_id}/questions/${question_id}`;
  const getTotalQuestionsURL = `/quizzes/${quiz_id}/questions`;
  const getAnswersURL = `/quizzes/${quiz_id}/questions/${question_id}/answers`;

  const promise1 = $.get(getQuestionURL);
  const promise2 = $.get(getTotalQuestionsURL);
  const promise3 = $.get(getAnswersURL);

  Promise.all([promise1, promise2, promise3]).then((result) => {
    const [questions, questionsFromQuiz, answers] = result;

    // Get Total Questions
    setTotalQuestionToLS(questionsFromQuiz[0].count);
    const totalQuestions = getTotalQuestionFromLS();
    $(".question-total-span").text(totalQuestions);

    // Get Questions
    $(".question_number, .question-counter-span").text(questions[0].sort_order);
    $(".question_string").text(questions[0].question);

    // Get Answers
    updateAnswerDOM(answers);
  });
};

const getQuizForm = () => {
  return $(`
  <div class="quiz_body">
    <div class="card question_body">
      <div>
        <h1 class="question_number"></h1>
      </div>
      <div>
        <h1 class="question_string"></h1>
      </div>
      <div class="quiz_body_footer">
        <div>
          <a class="back-btn"><i class="fas fa-angle-double-left"></i> </a>
        </div>
        <div>
          <h2 class="question_counter"><span class="question-counter-span">1</span> / <span class="question-total-span"></span></h2>
        </div>
      </div>
    </div>
    <form class="rounded answer_form right_bg"></form>
  </div> `);
};

const loadQuestion = () => {
  const [quiz_id_update, question_id_update] = updateQuiz();
  createQuestionAndAnswersDOMElement(quiz_id_update, question_id_update);
};

const postAnswersToUser_AnswersDB = (
  current_quiz_id,
  question_id_from_current_question,
  user_answer_id
) => {
  // post request to update db table
  $.post(
    `/quizzes/${current_quiz_id}/questions/${question_id_from_current_question}/answers/${user_answer_id}`
  ).then((response) => {
    console.log(response);
    // Ask mentor do i need to have .then after post request here?
  });
};

$(() => {
  let question_id = localStorage.getItem("question_id");
  let quiz_id = localStorage.getItem("quiz_id");

  // if the total question < user completed question
  // then
  // post request to users_quizzes table
  // calculate result and  render the result

  window.$quizForm_onLoad = loadQuestion;
  window.$quizForm = getQuizForm();

  const postAnswerToUsers_QuizzesDB = (current_quiz_id) => {
    // create insert into query into users_answers and users_quizzes table
    $.post(`/quizzes/${current_quiz_id}`);
  };

  //

  $("main").on("click", "div .option1-btn", onClick);

  $("main").on("click", "div .option2-btn", onClick2);

  $("main").on("click", ".option3-btn", () => {
    $("#option3").prop("checked", true);
    const current_quiz_id = localStorage.getItem("quiz_id");
    let question_id_from_current_question = localStorage.getItem("question_id");
    ++question_id_from_current_question;
    localStorage.setItem("question_id", question_id_from_current_question);
    createQuestionAndAnswersDOMElement(
      current_quiz_id,
      question_id_from_current_question
    );
    postAnswersToUser_AnswersDB(
      current_quiz_id,
      question_id_from_current_question,
      answer_id
    );
  });

  $("main").on("click", ".option4-btn", () => {
    $("#option4").prop("checked", true);
    const current_quiz_id = localStorage.getItem("quiz_id");
    let question_id_from_current_question = localStorage.getItem("question_id");
    ++question_id_from_current_question;
    localStorage.setItem("question_id", question_id_from_current_question);
    createQuestionAndAnswersDOMElement(
      current_quiz_id,
      question_id_from_current_question
    );
    postAnswersToUser_AnswersDB(
      current_quiz_id,
      question_id_from_current_question,
      answer_id
    );
  });

  $("main").on("click", ".back-btn", () => {
    //back to dashboard
    // or back to previous question
    const current_quiz_id = localStorage.getItem("quiz_id");
    let question_id_from_current_question = localStorage.getItem("question_id");
    --question_id_from_current_question;
    localStorage.setItem("question_id", question_id_from_current_question);
    createQuestionAndAnswersDOMElement(
      current_quiz_id,
      question_id_from_current_question
    );

    // remove the previous post request delete data from user_answers
  });
});

function updateAnswerDOM(answers) {
  const answerHTMLArray = answers.map((item, idx) => {
    if (item.correct_answer) {
      setCorrectAnswerIdToLS(item.id);
    }
    const answerDiv = `
      <div data-id="${item.id}" class="btn btn-outline-light option${
      idx + 1
    }-btn answer-div">
      <input type="radio" class="radioCustomButton" id="option${
        idx + 1
      }" name="radioGroup" />
      <label class="answerLabel answer${question_id}">${item.answer}</label>
      </div>`;
    return answerDiv;
  });
  $(".answer_form").children().remove();
  answerHTMLArray.forEach((item) => {
    $(".answer_form").append(item);
  });
}



function onClick(e) {
  $("#option1").prop("checked", true);
  const user_answer_id = $(e.target).data("id");
  const correctAnswerId = parseInt(getCorrectAnswerIdFromLS());

  if (user_answer_id === correctAnswerId) {
    console.log("correct");
  }

  // when button is clicks, load next question and answers set
  //get request on the next question with answers set
  //  /quiz/:id/questions/:id
  // /quiz/:id/questions/:id/answers
  const current_quiz_id = localStorage.getItem("quiz_id");
  let question_id_from_current_question = localStorage.getItem("question_id");
  ++question_id_from_current_question;
  localStorage.setItem("question_id", question_id_from_current_question);
  createQuestionAndAnswersDOMElement(
    current_quiz_id,
    question_id_from_current_question
  );

  postAnswersToUser_AnswersDB(
    current_quiz_id,
    question_id_from_current_question,
    user_answer_id
  );
}

function onClick2(e) {
  $("#option2").prop("checked", true);
  const user_answer_id = $(e.target).data("id");
  const correctAnswerId = getCorrectAnswerIdFromLS();
  console.log("correctAnswerId:", correctAnswerId);
  console.log("user_answer_id:", user_answer_id);

  if (user_answer_id === correctAnswerId) {
    console.log("correct");
  }

  // when button is clicks, load next question and answers set
  //get request on the next question with answers set
  //  /quiz/:id/questions/:id
  // /quiz/:id/questions/:id/answers
  const current_quiz_id = localStorage.getItem("quiz_id");
  let question_id_from_current_question = localStorage.getItem("question_id");
  ++question_id_from_current_question;
  localStorage.setItem("question_id", question_id_from_current_question);
  createQuestionAndAnswersDOMElement(
    current_quiz_id,
    question_id_from_current_question
  );

  postAnswersToUser_AnswersDB(
    current_quiz_id,
    question_id_from_current_question,
    user_answer_id
  );

  //post answer to response table
}
