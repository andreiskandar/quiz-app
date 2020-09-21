$(() => {
  const $main = $("#main-content");

  window.views_manager = {};

  window.views_manager.show = (item) => {
    $questionForm.detach();
    $quizForm.detach();
    $dashboard.detach();

    switch (item) {
      case "questionForm":
        $main.append($questionForm);
        break;
      case "quizForm":
        $main.append($quizForm);
        break;
      case "dashboard":
        $main.append($dashboard);
        break;

      case "error":
        break;
    }
  };
});
