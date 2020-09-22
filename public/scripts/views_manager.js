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
        $main.empty()
        $main.append($questionForm);
        break;
      case "quizForm":
        $main.empty()
        $main.append($quizForm);
        break;
<<<<<<< HEAD
      case "BrowsePublicQuizzes":
        $main.empty()
=======
      case "browsePublicQuizzes":
>>>>>>> index
        $main.append($quizDomElem);
        break;
      case "dashboard":
        $main.empty()
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
