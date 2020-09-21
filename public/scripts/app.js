$(() => {
  $(".facilitator_btn").click(function (e) {
    $(".login_page").remove();

    let userLinks;

    userLinks = `
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <ul class="nv-block">
          <li class="navbar-brand">Q.a. </li>
          <div class="nv-links">
            <li class="nav-link browse_btn">Browse</li>
            <li class="nav-link create_btn">Create</li>
            <li class="nav-link pastQuiz_btn">Pass Quizzes</li>
          </div>
          <ul class="nv-links-side">
            <li class="nav-link"  id="nv_username">username</li>
            <li class="nav-link">Login / Register</li>
            <li class="nav-link">Logout</li>
          </ul>
        </ul>
      </nav>
          `;

    $("#page-header").append(userLinks);
    e.preventDefault();
  });

  $("header").on("click", ".browse_btn", () => {
    views_manager.show("quizForm");
  });

  $("header").on("click", ".create_btn", () => {
    views_manager.show("questionForm");
  });

  // $(".create_btn").click(function (e) {
  //   console.log("hello");
  //   e.preventDefault();
  // });
});
