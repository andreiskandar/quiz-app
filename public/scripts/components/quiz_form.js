$(() => {
  let question_id = 1;
  let quiz_id = 2;

  const getQuestionFromDB = () => {
    $.get(`/quizzes/${quiz_id}/questions/${question_id}`).then((questions) => {
      $(".question_number, .question-counter-span").text(questions[0].id);
      $(".question_string").text(questions[0].question);
      // $(".question-total-span").text();
    });
  };

  //  /quiz/:id/questions/:id

  // /quiz/:id/questions/:id/answers
  const getAnswersForQuestionFromDB = () => {
    $.get(`/quizzes/${quiz_id}/questions/${question_id}/answers`).then(
      (answers) => {
        const renderAnswer = answers.map((item, idx) => {
          const answerDiv = `
            <div class="btn btn-outline-light option${question_id}-btn answer-div">
              <input type="radio" class="radioCustomButton" id="option${question_id}" name="radioGroup" />
              <label class="answerLabel answer${question_id}">${item.answer}</label>
            </div>`;
          $(".answer_form").append(answerDiv);
        });
        // .answer_form
      }
    );
  };

  const $quizForm = $(`
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
          <h2 class="question_counter"><span class="question-counter-span">1</span>/<span class="question-total-span"></span></h2>
        </div>
      </div>
    </div>
    <form class="rounded answer_form right_bg"></form>
  </div> `);

  // <div class="btn btn-outline-light text-wrap option4-btn answer-div">
  //   <input type="radio" class="radioCustomButton" id="option4" name="radioGroup" />
  //   <label class="answerLabel answer4"
  //     >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, ad obcaecati
  //     quaerat ex ratione officia fuga quam inventore ipsam placeat</label
  //   >
  const loadQuestion = () => {
    getQuestionFromDB();
    getAnswersForQuestionFromDB();
  };

  window.$quizForm_onLoad = loadQuestion;
  window.$quizForm = $quizForm;
  const counter = 1;

  $("main").on("click", ".option1-btn", () => {
    $("#option1").prop("checked", true);
    // when button is clicks, load next question and answers set
    //get request on the next question with answers set
    //  /quiz/:id/questions/:id
    // /quiz/:id/questions/:id/answers
    $(".answer_form").empty();
    $.get(`/quizzes/${quiz_id}/questions/${++question_id}`).then(
      (questions) => {
        $(".question_number, .question-counter-span").text(questions[0].id);
        $(".question_string").text(questions[0].question);
        // $(".question-total-span").text();
        $.get(`/quizzes/${quiz_id}/questions/${question_id}/answers`).then(
          (answers) => {
            const renderAnswer = answers.map((item, idx) => {
              console.log("inside render answer");
              const answerDiv = `
                <div class="btn btn-outline-light option${question_id}-btn answer-div">
                  <input type="radio" class="radioCustomButton" id="option${question_id}" name="radioGroup" />
                  <label class="answerLabel answer${question_id}">${item.answer}</label>
                </div>`;
              $(".answer_form").append(answerDiv);
            });
            // .answer_form
          }
        );
      }
    );
  });

  // $.get(`/quizzes/${quiz_id}/questions/${++question_id}`).then(
  //   (questions) => {
  //     $(".question_number").text(questions[0].id);
  //     $(".question_string").text(questions[0].question);

  //     $.get(`/quizzes/${quiz_id}/questions/${question_id}/answers`).then(
  //       (answers) => {
  //         console.log("answers:", answers);
  //         const renderAnswer = answers.map(
  //           (item, idx) => $(`.answer${idx + 1}`).text(item.answer)
  //post request to response table query
  //keep track right / answer
  // );

  $("main").on("click", ".option2-btn", () => {
    $("#option2").prop("checked", true);
  });

  $("main").on("click", ".option3-btn", () => {
    $("#option3").prop("checked", true);
  });

  $("main").on("click", ".option4-btn", () => {
    $("#option4").prop("checked", true);
  });
  $("main").on("click", ".back-btn", () => {
    //back to dashboard
    // or back to previous question
    $(".answer_form").empty();

    $.get(`/quizzes/${quiz_id}/questions/${--question_id}`).then(
      (questions) => {
        console.log("question_id:", question_id);
        $(".question_number, .question-counter-span").text(questions[0].id);
        $(".question_string").text(questions[0].question);
        // $(".question-total-span").text();
        $.get(`/quizzes/${quiz_id}/questions/${question_id}/answers`).then(
          (answers) => {
            const renderAnswer = answers.map((item, idx) => {
              console.log("object");
              const answerDiv = `
                <div class="btn btn-outline-light option${question_id}-btn answer-div">
                  <input type="radio" class="radioCustomButton" id="option${question_id}" name="radioGroup" />
                  <label class="answerLabel answer${question_id}">${item.answer}</label>
                </div>`;
              $(".answer_form").append(answerDiv);
            });
            // .answer_form
          }
        );
      }
    );
  });
  $quizForm.submit(function (e) {});
});
