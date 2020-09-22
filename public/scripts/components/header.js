$(() => {
  $("header").hide();

  window.header = {};

  const $pageHeader = $("#page-header");

  let currentUser = null;

  $(".facilitator_btn").click(function (e) {
    $("header").show();
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
      console.log("non-user");

      updateHeader(user.user);
    });
  });

  $("header").on("click", ".myQuiz_btn", () => {
    views_manager.show("dashboard");
  });

  $("header").on("click", ".brand_btn", () => {
    views_manager.show("dashboard");
  });

  $("header").on("click", ".browse_btn", () => {
    views_manager.show("quizForm");
  });
  $("header").on("click", ".create_btn", () => {
    views_manager.show("questionForm");
  });

  $("header").on("click", "#logout", () => {
    views_manager.show("login");
  });

  $("header").on("click", ".pastQuiz_btn", () => {
    views_manager.show("questionForm");
  });
});
