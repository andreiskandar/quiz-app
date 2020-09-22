$(() => {
  let question_id = 1;
  const getQuestionFromDB = () => {
    //quiz_id = 2
    $.get("/quizzes/2/questions/").then((questions) => {
      console.log(questions);
      $(".question_number").text(questions[0].id);
      $(".question_string").text(questions[0].question);
      $(".question_counter").text();
    });
  };

  //  /quiz/:id/questions/:id

  // /quiz/:id/questions/:id/answers
  const getAnswersForQuestionFromDB = () => {
    $.get(`/answers/${2}`).then((answers) => {
      const renderAnswer = answers.map((item, idx) =>
        $(`.answer${idx + 1}`).text(item.answer)
      );
    });
  };

  const $quizForm = $(`
  <div class="quiz_body">
  <div class="card question_body">
  <div>
  <h1 class="question_number">1</h1>
  </div>
  <div>
  <h1 class="question_string">
  </h1>
  </div>
  <div class="quiz_body_footer">
  <div>
  <a class="back-btn"><i class="fas fa-angle-double-left"></i> </a>
  </div>
  <div>
  <h2 class="question_counter">1/10</h2>
  </div>
  </div>
  </div>
  <form class="rounded answer_form right_bg">
  <div class="btn btn-outline-light option1-btn answer-div">
  <input
  type="radio"
  class="radioCustomButton"
  id="option1"
  name="radioGroup"
  />
  <label class="answerLabel answer1"></label>
  </div>
  <div class="btn btn-outline-light option2-btn answer-div">
  <input
  type="radio"
  class="radioCustomButton"
  id="option2"
  name="radioGroup"
  />
  <label class="answerLabel answer2">Answer 2</label>
  </div>
  <div class="btn btn-outline-light option3-btn answer-div">
  <input
  type="radio"
  class="radioCustomButton"
  id="option3"
  name="radioGroup"
  />
  <label class="answerLabel answer3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, </label>
  </div>
  <div class="btn btn-outline-light text-wrap option4-btn answer-div">
  <input
  type="radio"
  class="radioCustomButton"
  id="option4"
  name="radioGroup"
  />
  <label class="answerLabel answer4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, ad obcaecati quaerat ex ratione officia fuga quam inventore ipsam placeat</label>
  </div>
  </form>
  </div>
  `);

  const loadQuestion = () => {
    getQuestionFromDB();
    getAnswersForQuestionFromDB();
  };

  window.$quizForm_onLoad = loadQuestion;
  window.$quizForm = $quizForm;
  let counter = 0;

  $("main").on("click", ".option1-btn", () => {
    // set bind radio button with div element
    $("#option1").prop("checked", true);
    counter++;
    // when button is clicks, load next question and answers set
    //get request on the next question with answers set
    //  /quiz/:id/questions/:id
    // /quiz/:id/questions/:id/answers
    $.get("/quizzes/2/questions/:question_id").then((questions) => {
      $(".question_number").text(questions[1].id);
      $(".question_string").text(questions[1].question);
      //post request to response table query
      //keep track right / answer
    });
  });
  $("main").on("click", ".option2-btn", () => {
    // set bind radio button with div element
    $("#option2").prop("checked", true);
  });

  $("main").on("click", ".option3-btn", () => {
    // set bind radio button with div element
    $("#option3").prop("checked", true);
  });

  $("main").on("click", ".option4-btn", () => {
    // set bind radio button with div element
    $("#option4").prop("checked", true);
  });
  $("main").on("click", ".back-btn", () => {
    //back to dashboard
    // or back to previous question
    counter--;
  });

  $quizForm.submit(function (e) {});
});
