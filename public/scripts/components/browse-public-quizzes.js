$(() => {

  const $publicQuizContainer = $(`<div class="row">`);
  const $publicQuizContainerClose = $(`</div>`);

  const $publicQuizList = $(`
  <div class="card col-md">
    <div class="card quiz_title_dashboard">quiz title</div>
    <div class="card question_card_dashboard">q1</div>
    <div class="card question_card_dashboard">q2</div>
    <div class="card question_card_dashboard">q3</div>
  </div>
  `);

  window.$publicQuizList = $publicQuizList;
  window.$publicQuizContainer = $publicQuizContainer;
  window.$publicQuizContainerClose = $publicQuizContainerClose;

});
