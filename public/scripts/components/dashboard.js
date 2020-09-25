const getQuizzes = () => {
  const randomQuizContainer = `<div class="row random-quizzes">`;
  const randomQuizContainerClose = `</div>`;

  $.get("/quizzes/random").then((data) => {
    //TODO:refactor to use data-quizID
    let randomQuizDomElem = randomQuizContainer;
    for (const quizzes of data) {
      // <div class="card question_card_dashboard ${quizzes.id}">q1</div>
      // <div class="card question_card_dashboard ${quizzes.id}">q2</div>
      // <div class="card question_card_dashboard ${quizzes.id}">q3</div>
      randomQuizDomElem += `

      <div class="card col-md clickable" id="${quizzes.id}">
      <div class="card quiz_title_dashboard"><h3 id='quiz-title'>${quizzes.name}</h3></div>
      <div class="share"><i class="fas fa-share-square"></i> http://localhost:3000/quiz/${quizzes.id}</div>
      </div>`;
    }
    randomQuizDomElem += randomQuizContainerClose;
    window.views_manager.show("quizDashboard", randomQuizDomElem);
  });
};

$(() => {
  //calls getQuizzes so we can have it prepared
  getQuizzes();

  $("header").on("click", ".brand_btn", () => {
    getQuizzes();
  });

  //we need a condition to make getQuizzes happen every time
  $("header").on("click", "#logout", () => {
    getQuizzes();
  });
});
