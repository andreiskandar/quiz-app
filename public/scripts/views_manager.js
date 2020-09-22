$(() => {
  const $main = $("#main-content");
  window.views_manager = {};
  window.views_manager.show = (item, domElem) => {
    // $login.detach();
    // $questionForm.detach();
    // $quizForm.detach();
    // $dashboard.detach();
    // $quizDomElem.detach();

    $main.empty();
    $main.append(domElem);

    switch (item) {
      case "questionForm":
        // $main.append($questionForm);
        break;
      case "quizForm":
        console.log($quizForm);
        $main.append(window.$quizForm);
        break;
      case "browsePublicQuizzes":
        // $main.append(window.$quizDomElem);
        $main.append(domElem);
        break;
      case "dashboard":
        $main.append($dashboard);
        break;
      case "login":
        //empties the #main-content

        $(".login_page").empty();
        $(".login_page").append($login).show();
        $("#page-header").empty();
        break;
      case "error":
        break;
    }
  };
});
