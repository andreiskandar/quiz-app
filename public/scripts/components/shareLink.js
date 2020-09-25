$(() => {
  const quiz_id = window.location.pathname.split("/")[2];

  localStorage.setItem("question_id", 1);

  window.views_manager.show("quizForm");
});
