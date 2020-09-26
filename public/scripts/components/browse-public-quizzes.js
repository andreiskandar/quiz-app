$(() => {
  const publicQuizContainer = `<div class="row remove-margin-top">`;
  const publicQuizContainerClose = `</div>`;

  $("header").on("click", ".browse_btn", () => {
    $.get("/quizzes").then((data) => {
      // clearQuiz();
      let counter = 0;
      let publicQuizDomElem = publicQuizContainer;
      for (const quizzes of data) {
        // <div class="card question_card_dashboard ${quizzes.id}">q1</div>
        // <div class="card question_card_dashboard ${quizzes.id}">q2</div>
        // <div class="card question_card_dashboard ${quizzes.id}">q3</div>
        // <div class="card question_card_dashboard ${quizzes.id}">q4</div>
        if (counter % 3 === 0) {
          publicQuizDomElem += publicQuizContainerClose;
          publicQuizDomElem += publicQuizContainer;

          publicQuizDomElem += `
          <div class="card col-md clickable" id="${quizzes.id}">
          <div class="card quiz_title_dashboard"><h3 id='quiz-title' class="quiz-title">${quizzes.name}</h3></div>
          <div class="share"><i class="fas fa-share-square"></i> http://localhost:3000/quizzes/${quizzes.id}</div>
          </div>`;
        } else {
          publicQuizDomElem += `
          <div class="card col-md clickable" id="${quizzes.id}">
          <div class="card quiz_title_dashboard"><h3 id='quiz-title' class="quiz-title">${quizzes.name}</h3></div>
          <div class="share"><i class="fas fa-share-square"></i> http://localhost:3000/quiz/${quizzes.id}</div>
          </div>`;
        }
        // <div class="card question_card_dashboard ${quizzes.id}">q1</div>
        // <div class="card question_card_dashboard ${quizzes.id}">q2</div>
        // <div class="card question_card_dashboard ${quizzes.id}">q3</div>
        // <div class="card question_card_dashboard ${quizzes.id}">q4</div>
        counter++;
      }
      publicQuizDomElem += publicQuizContainerClose;
      window.views_manager.show("browsePublicQuizzes", publicQuizDomElem);
    });
  });
});
