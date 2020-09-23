$(document).ready(() => {
  window.header = {};
  let currentUser = null;

  $("header").hide();
  $("#main-content").hide();

  const $loginReg = $(".login_page");
  $(".login_page").append($login);

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
        <li class="logout_btn" id="logout">Logout</li>
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
        <li class="logout_btn" id="logout">Logout</li>
      </div>
    </ul>
  </header>
  `;
    }

    $("#page-header").append(userLinks);
    // not passing in the quiz element now!
    // views_manager.show("dashboard");
  };

  $loginReg.on("submit", "#login-register", function (e) {
    e.preventDefault();
    const email = $loginReg.find("#email").val();
    //may consider moving these methods to empty()
    $("header").show();
    $.post("/login", { email }, () => {
      getUserType().then((user) => {
        updateHeader(user.is_teacher);
        $("#main-content").show();
      });

      $(".login_page").hide();

      window.header.update = updateHeader;
    });
  });

  $("header").on("click", ".create_btn", () => {
    views_manager.show("questionForm");
    views_manager.show(null, window.$questionForm);
  });

  // $("header").on("click", ".myQuiz_btn", () => {
  //   views_manager.show("quizForm");
  // });

  $("header").on("click", "#logout", () => {
    $("header").hide();
    $("#main-content").hide();
    //remove user cookie
    $.post("/dashboard/logout", () => {
      views_manager.show("login");
    });
  });
});
