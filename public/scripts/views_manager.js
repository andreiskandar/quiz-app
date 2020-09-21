$(() => {
  const $main = $("#main-content");

  window.views_manager = {};

  window.views_manager.show = (item) => {
    $questionForm.detach();
    $quizForm.detach();

    const elm = `<h1>hello</h1>`;
    switch (item) {
      case "questionForm":
        elm.appendTo($main);
        // $main.append($questionForm);
        break;

      case "error":
        break;
    }
  };
});
