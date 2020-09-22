$(() => {
  $("header").hide();

  window.header = {};

  let currentUser = null;

  $(".facilitator_btn").click(function (e) {
    $("header").show();
    $(".login_page").hide();

    window.header.update = updateHeader;
  });

  //getting a user type e.g. facilitator or student
  //changes the header based on user permission
  //we don't have a getUserType function yet!

  //get the type of user //
  // getUserType().then((userType) => {

  // });

  //determines if we get a my-quizzes button or not
  //set access levels for quizzes too - does this quiz belong to a student?
  //check if user type !== null?
  //psuedocode to check user type
  //if usertype === student {

  // } else {
  //   //show teacher header
  // }

  // $(".brand_btn").click((e) => {
  //   e.preventDefault();
  //   console.log("target brand button");
  //   views_manager.show("dashboard");
  // });

  $("header").on("click", ".browse_btn", () => {
    views_manager.show("BrowsePublicQuizzes");
  });
  // $("header").on("click", ".browse_btn", () => {
  //   views_manager.show("quizForm");
  // });
  $("header").on("click", ".create_btn", () => {
    views_manager.show("questionForm");
  });
  $("header").on("click", "#logout", () => {
    views_manager.show("login");
  });
  // $(".create_btn").click(function (e) {
  //   console.log("hello");
  //   e.preventDefault();
  // });
});
