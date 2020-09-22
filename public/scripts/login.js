$(() => {
  const $loginReg = $(".login_page");
  $(".login_page").append($login);

  $loginReg.on("submit", "#login-register", function (e) {
    const email = $loginReg.find("#email").val();
    //may consider moving these methods to empty()
    $("header").show();
    $("#main-content").show();

    $.post("/login", { email: email });

    $(".login_page").hide();

    const updateHeader = (isTeacher) => {
      currentUser = isTeacher;

      let userLinks;
      if (isTeacher) {
        userLinks = `
        <header>
        <ul class="flex-row">
          <div class="flex-row">
            <li class="brand brand_btn">Q.a.</li>
            <li class="browse_btn">Browse</li>
            <li class="create_btn">Create</li>
            <li class="myQuiz_btn">My Quizzes</li>
            <li class="pastQuiz_btn">Past Quizzes</li>
          </div>
          <div class="flex-row">
            <li class="userType_btn">Teacher</li>
            <li class="logout_btn">Logout</li>
          </div>
        </ul>
      </header>
      `;
      } else {
        userLinks = `
        <header>
        <ul class="flex-row">
          <div class="flex-row">
            <li class="brand brand_btn">Q.a.</li>
            <li class="browse_btn">Browse</li>
            <li class="myQuiz_btn">My Quizzes</li>
            <li class="pastQuiz_btn">Past Quizzes</li>
          </div>
          <div class="flex-row">
            <li class="userType_btn">Student</li>
            <li class="logout_btn">Logout</li>
          </div>
        </ul>
      </header>
      `;
      }

      $("#page-header").append(userLinks);
      views_manager.show("dashboard");
      e.preventDefault();
    };

    window.header.update = updateHeader;
    getUserType().then((user) => {
      console.log(user);
      updateHeader(user.user);
    });
  });

  // getUserType().then((json) => {console.log(json)});

  $("header").on("click", ".brand_btn", () => {
    views_manager.show("dashboard");
  });

  $("header").on("click", ".browse_btn", () => {
    views_manager.show("BrowsePublicQuizzes");
  });

  $("header").on("click", ".create_btn", () => {
    views_manager.show("questionForm");
  });
});
