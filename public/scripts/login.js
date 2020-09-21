$(document).ready(() => {
  const $loginReg = $('#login-register');
  const $email = $('#email');

  $loginReg.on('submit', function(e)  {
    e.preventDefault()
    const email = $email.val()
    $.post( "/login", {email: email});

    // $.post("/login")
    $(".login_page").remove();


    let userLinks;

    userLinks = `
      <nav>
        <ul class="nv-block">
          <li class="navbar-brand">Q.a. </li>
          <div class="nv-links">
            <li class="nav-link browse_btn">Browse</li>
            <li class="nav-link create_btn">Create</li>
          </div>
          <div class="nav navbar-right top-nav">
            <li class="nav-link"  id="nv_username">username</li>
            <li class="nav-link">Login / Register</li>
            <li class="nav-link">Logout</li>
          </div>
        </ul>
      </nav>
      `;

    $("#page-header").append(userLinks);
    e.preventDefault();
  });

  const elm = `<h1>hello</h1>`;

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



