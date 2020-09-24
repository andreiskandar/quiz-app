$(() => {
  const publicQuizContainer = `<div class="row remove-margin-top">`;
  const publicQuizContainerClose = `</div>`;

  //do not touch this reference to my quizzes please
  $("header").on("click", ".myQuiz_btn", () => {
    // $.get("/dashboard/my-quizzes", (data) =>{

    $.get("/dashboard/my-quizzes").then((data) => {
      // clearQuiz();
      let counter = 0;
      let quizDomElem = publicQuizContainer;
      for (const quizzes of data) {
        if (counter % 3 === 0) {
          quizDomElem += publicQuizContainerClose;
          quizDomElem += publicQuizContainer;

          quizDomElem += `
          <div class="card col-md clickable" id="${quizzes.id}">
          <div class="card quiz_title_dashboard"><h3 id='title'>${quizzes.name}</h3></div>
          <div class="card question_card_dashboard ${quizzes.id}">q1</div>
          <div class="card question_card_dashboard ${quizzes.id}">q2</div>
          <div class="card question_card_dashboard ${quizzes.id}">q3</div>
          <div class="card question_card_dashboard ${quizzes.id}">q4</div>
          <div class="share"><i class="fas fa-share-square"></i>Share Quiz: http://localhost:3000/quizzes/${quizzes.id}</div>
          </div>`;
        } else {
          quizDomElem += `
          <div class="card col-md clickable" id="${quizzes.id}">
          <div class="card quiz_title_dashboard"><h3 id='title'>${quizzes.name}</h3></div>
          <div class="card question_card_dashboard ${quizzes.id}">q1</div>
          <div class="card question_card_dashboard ${quizzes.id}">q2</div>
          <div class="card question_card_dashboard ${quizzes.id}">q3</div>
          <div class="card question_card_dashboard ${quizzes.id}">q4</div>
          <div class="share"><i class="fas fa-share-square"></i>Share Quiz: http://localhost:3000/quizzes/${quizzes.id}</div>
          </div>`;
        }
        counter++;
      }
      quizDomElem += publicQuizContainerClose;
      console.log(quizDomElem)
      window.views_manager.show("browseMyQuizzes", quizDomElem);
    });
  });
  //add a clear to this object once we navigate away from
});
