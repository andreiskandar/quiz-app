$(() => {
  const $main = $("#main-content");
  window.views_manager = {};
  window.views_manager.show = (item) => {
    $questionForm.detach();
    $quizForm.detach();
    $dashboard.detach();
    $login.detach();
    switch (item) {
      case "questionForm":
        $main.append($questionForm);
        break;
      case "quizForm":
        $main.append($quizForm);
        break;
      case "browsePublicQuizzes":
        $main.append($quizDomElem);
        break;
      case "dashboard":
        $main.append($dashboard);
        break;
      case "login":
        //empties the #main-content
        $(".login_page").empty();
        $(".login_page").append($login);
        $("#page-header").empty();
        break;
      case "error":
        break;
    }
  };
});
