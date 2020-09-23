$(() => {
  let question_id = 1;
  let quiz_id = 2;

  const createQuestionAndAnswersDOMElement = () => {
    $.get(`/quizzes/${quiz_id}/questions/${question_id}`).then((questions) => {
      $.get(`/quizzes/${quiz_id}/questions`).then((questions) => {
        const totalQuestion = questions[0].count;
        $(".question-total-span").text(totalQuestion);
      });
      $(".question_number, .question-counter-span").text(questions[0].id);
      $(".question_string").text(questions[0].question);
      $.get(`/quizzes/${quiz_id}/questions/${question_id}/answers`).then(
        (answers) => {
          const answerHTMLArray = answers.map((item, idx) => {
            const answerDiv = `
              <div class="btn btn-outline-light option${
                idx + 1
              }-btn answer-div">
              <input type="radio" class="radioCustomButton" id="option${
                idx + 1
              }" name="radioGroup" />
              <label class="answerLabel answer${question_id}">${
              item.answer
            }</label>
              </div>`;
            return answerDiv;
          });
          $(".answer_form").children().remove();
          answerHTMLArray.forEach((item) => {
            $(".answer_form").append(item);
          });
        }
      );
    });
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
          <h2 class="question_counter"><span class="question-counter-span">1</span> / <span class="question-total-span"></span></h2>
        </div>
      </div>
    </div>
    <form class="rounded answer_form right_bg"></form>
  </div> `);

  window.$quizForm_onLoad = createQuestionAndAnswersDOMElement;
  window.$quizForm = $quizForm;

  const postAnswersToDB = () => {
    $.post();
  };

  $("main").on("click", ".option1-btn", () => {
    $("#option1").prop("checked", true);
    // when button is clicks, load next question and answers set
    //get request on the next question with answers set
    //  /quiz/:id/questions/:id
    // /quiz/:id/questions/:id/answers
    ++question_id;
    createQuestionAndAnswersDOMElement();
    //post answer to response table
  });

  $("main").on("click", ".option2-btn", () => {
    $("#option2").prop("checked", true);
    createQuestionAndAnswersDOMElement();
  });

  $("main").on("click", ".option3-btn", () => {
    $("#option3").prop("checked", true);
    createQuestionAndAnswersDOMElement();
  });

  $("main").on("click", ".option4-btn", () => {
    $("#option4").prop("checked", true);
    createQuestionAndAnswersDOMElement();
  });

  $("main").on("click", ".back-btn", () => {
    //back to dashboard
    // or back to previous question
    --question_id;
    createQuestionAndAnswersDOMElement();

    // $.get(`/quizzes/${quiz_id}/questions/${--question_id}`).then(
    //   (questions) => {
    //     $(".question_number, .question-counter-span").text(questions[0].id);
    //     $(".question_string").text(questions[0].question);
    //     $.get(`/quizzes/${quiz_id}/questions/${question_id}/answers`).then(
    //       (answers) => {
    //         const answerHTMLArray = answers.map((item, idx) => {
    //           const answerDiv = `
    //           <div class="btn btn-outline-light option${
    //             idx + 1
    //           }-btn answer-div">
    //           <input type="radio" class="radioCustomButton" id="option${
    //             idx + 1
    //           }" name="radioGroup" />
    //           <label class="answerLabel answer${question_id}">${
    //             item.answer
    //           }</label>
    //           </div>`;
    //           return answerDiv;
    //         });
    //         $(".answer_form").children().remove();
    //         answerHTMLArray.forEach((item) => {
    //           $(".answer_form").append(item);
    //         });
    //       }
    //     );
    //   }
    // );
  });
  $quizForm.submit(function (e) {});
});
