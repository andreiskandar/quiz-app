$(document).ready(() => {
  const $loginReg = $('.login_page');
  $('.login_page').append($login)


  console.log(email)

  $loginReg.on('submit', '#login-register', function(e)  {
    e.preventDefault()
    const email = $loginReg.find('#email').val()
    //may consider moving these methods to empty()
    $("header").show();
    $("#main-content").show();
    $.post( "/login", {email: email});
    $(".login_page").hide();

    let userLinks;

    userLinks = `
      <header>
      <ul class="flex-row">
        <div class="flex-row">
          <li class="brand brand_btn">Q.a.</li>
          <li class="browse_btn">Browse</li>
          <li class="create_btn">Create</li>
          <li class="pastQuiz_btn">Past Quizzes</li>
        </div>
        <div class="flex-row">
          <li class="userType_btn">Select User Type</li>
          <li id="logout" class="logout_btn">Logout</li>
        </div>
      </ul>
    </header>
          `;
    // $("#page-header").empty();
    $("#page-header").append(userLinks);
    views_manager.show("dashboard");
    e.preventDefault();
  });

  // getUserType().then((json) => {console.log(json)});

  // $("header").on("click", ".brand_btn", () => {
  //   views_manager.show("dashboard");
  // });

  $("header").on("click", ".browse_btn", () => {
    views_manager.show("BrowsePublicQuizzes");
  });

  $("header").on("click", ".create_btn", () => {
    views_manager.show("questionForm");
  });
});
