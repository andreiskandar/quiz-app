$(() => {
  $("#main-content").click(".clickable", function (e) {
    let id = e.target.id;
    $.get(`/quizzes/${id}`, () => {
      views_manager.show(null, window.$dynamicQuizForm);
    });
  });
});
