$(() => {
  const publicQuizContainer = `<div class="row remove-margin-top">`;
  const publicQuizContainerClose = `</div>`;

  $("header").on("click", ".browse_btn", () => {
    $.get("/quizzes").then((data) => {
      // clearQuiz();
      let counter = 0;
      let publicQuizDomElem = publicQuizContainer;
      for (const quizzes of data) {
        if (counter % 3 === 0) {
          publicQuizDomElem += publicQuizContainerClose;
          publicQuizDomElem += publicQuizContainer;

          publicQuizDomElem += `
          <div class="card col-md clickable" id="${quizzes.id}">
          <div class="card quiz_title_dashboard">${quizzes.name}</div>
          <div class="card question_card_dashboard ${quizzes.id}">q1</div>
          <div class="card question_card_dashboard ${quizzes.id}">q2</div>
          <div class="card question_card_dashboard ${quizzes.id}">q3</div>
          <div class="card question_card_dashboard ${quizzes.id}">q4</div>
          </div>`;
        } else {
          publicQuizDomElem += `
          <div class="card col-md clickable" id="${quizzes.id}">
          <div class="card quiz_title_dashboard">${quizzes.name}</div>
          <div class="card question_card_dashboard ${quizzes.id}">q1</div>
          <div class="card question_card_dashboard ${quizzes.id}">q2</div>
          <div class="card question_card_dashboard ${quizzes.id}">q3</div>
          <div class="card question_card_dashboard ${quizzes.id}">q4</div>
          </div>`;
        }
        counter++;
      }
      publicQuizDomElem += publicQuizContainerClose;
      window.views_manager.show("browsePublicQuizzes", publicQuizDomElem);
    });
  });
});
