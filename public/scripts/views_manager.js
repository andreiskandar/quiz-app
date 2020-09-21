$(() => {
  const $main = $("#main-content");
  window.views_manager = {};
  window.views_manager.show = (item) => {
    $questionForm.detach();
    $quizForm.detach();
    $dashboard.detach();
<<<<<<< HEAD

=======
    const elm = `<h1>hello</h1>`;
>>>>>>> 857beaa6ae82869a2467dce58e6831d16273b1ad
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
