$(() => {
  const getQuestionFromDB = () => {
    $.get("/questions/test").then((questions) => {
      questions.map((item) => console.log(item.question));
    });
  };
  const getAnswersForQuestionFromDB = () => {
    $.get(`/answers/${2}`).then((answers) => {
      answers.map((item) => {
        console.log(item.answer);
      });
    });
  };

  getQuestionFromDB();
  getAnswersForQuestionFromDB();

  const $quizForm = $(`
  <div class="quiz_body">
  <div class="card question_body">
    <div>
      <h1 class="question_number">1</h1>
    </div>
    <div>
      <h1 class="question_string">
        What library is used for parsing, validating, manipulating, and
        formatting dates?
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
      <label class="answerLabel">Answer 1</label>
    </div>
    <div class="btn btn-outline-light option2-btn answer-div">
      <input
        type="radio"
        class="radioCustomButton"
        id="option2"
        name="radioGroup"
      />
      <label class="answerLabel">Answer 2</label>
    </div>
    <div class="btn btn-outline-light option3-btn answer-div">
      <input
        type="radio"
        class="radioCustomButton"
        id="option3"
        name="radioGroup"
      />
      <label class="answerLabel">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, </label>
    </div>
    <div class="btn btn-outline-light text-wrap option4-btn answer-div">
      <input
        type="radio"
        class="radioCustomButton"
        id="option4"
        name="radioGroup"
      />
      <label class="answerLabel">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, ad obcaecati quaerat ex ratione officia fuga quam inventore ipsam placeat</label>
    </div>
  </form>
</div>
  `);

  window.$quizForm = $quizForm;

  $("main").on("click", ".option1-btn", () => {
    // set bind radio button with div element
    $("#option1").prop("checked", true);
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
  });

  $quizForm.submit(function (e) {});
});
