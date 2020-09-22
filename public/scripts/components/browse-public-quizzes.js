$(() => {
  const $publicQuizContainer = `<div class="row">`;
  const $publicQuizContainerClose = `</div>`;
  let $quizDomElem = "";

  $("header").on("click", ".browse_btn", () => {
    // $.get("/dashboard/my-quizzes", (data) =>{

    $.get("/dashboard/my-quizzes").then((data) => {
      let counter = 0;
      $quizDomElem = $publicQuizContainer;
      console.log(data);
      for (quizzes of data) {
        if (counter % 3 === 0) {
          $quizDomElem += $publicQuizContainerClose;
          $quizDomElem += $publicQuizContainer;

          $quizDomElem += `<div class="card col-md">
        <div class="card quiz_title_dashboard">${quizzes.name}</div>
        <div class="card question_card_dashboard">q1</div>
        <div class="card question_card_dashboard">q2</div>
        <div class="card question_card_dashboard">q3</div>
        </div>`;
        } else {
          $quizDomElem += `<div class="card col-md">
        <div class="card quiz_title_dashboard">${quizzes.name}</div>
        <div class="card question_card_dashboard">q1</div>
        <div class="card question_card_dashboard">q2</div>
        <div class="card question_card_dashboard">q3</div>
        </div>`;
        }
        counter++;
      }
      $quizDomElem += $publicQuizContainerClose;
      console.log($quizDomElem);
    });
    console.log($quizDomElem);
    window.$quizDomElem = $quizDomElem;
    //add a clear to this object once we navigate away from
  });
  // window.$quizDomElem = $quizDomElem;
});
