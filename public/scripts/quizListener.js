$(document).on("click", ".clickable", function (e) {
  localStorage.clear("quiz_id");
  const quizID = e.target.id;
  localStorage.setItem("quiz_id", quizID);
  $.post("/dashboard/my-quizzes/question1", quizID)
    .then((data) => {
      question_id = data[0].id;
      localStorage.setItem("question_id", question_id);
      return;
    })
    .then(() => {
      window.location.href = `/quiz/${quizID}`;
      // views_manager.show("quizForm");
    });
});

$(() => {});
