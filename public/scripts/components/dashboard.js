const getQuizzes = () => {
  const randomQuizContainer = `<div class="row random-quizzes">`;
  const randomQuizContainerClose = `</div>`;

  $.get('/quizzes/random').then((data) => {
    // console.log(data);
    let randomQuizDomElem = randomQuizContainer;
    for (const quizzes of data) {




      randomQuizDomElem +=
      `
      <a href="/quizzes/${quizzes.id}">
      <div class="card col-md">
      <div class="card quiz_title_dashboard">${quizzes.name}</div>
      <div class="card question_card_dashboard">q1</div>
      <div class="card question_card_dashboard">q2</div>
      <div class="card question_card_dashboard">q3</div>
      </div></a>`;
    }
    randomQuizDomElem += randomQuizContainerClose;
    window.views_manager.show("quizDashboard", randomQuizDomElem);
  });
}

$(() => {
  //calls getQuizzes so we can have it prepared
getQuizzes();

    $("header").on("click", ".brand_btn", () => {
        getQuizzes();
    });
});
