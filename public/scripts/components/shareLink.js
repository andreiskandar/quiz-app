$(() => {
  const quiz_id = window.location.pathname.split("/")[2];
  const question_id = window.location.pathname.split("/")[4];
  localStorage.setItem("quiz_id", quiz_id);
  localStorage.setItem("question_id", question_id);
  window.views_manager.show("quizForm");
});
