$(() => {
  $("#main-content").click(".clickable", function (e) {
    let id = e.target.id;
    views_manager.show("quizForm");
  });
});
