$(document).ready(() => {

  //timely reminder - we are having to target clickable elems thrugh header, the reason is unknown at present
  $("header").on("click", "#logout", () => {
    console.log('clicked by targeting header');
    //hide the header - do we need to completely destroy these elements for a different user logging in?
        $("header").hide();
        $("#main-content").hide();
        //remove user cookie
           $.post("/dashboard/logout");
        //add the login page
    $(".login_page").show();
    //route to logout to remmove cookie
  });

});


  // $("header").children().on("click", function(e) {
  //   console.log("hello")
  // });
    // $("header").hide();
    // $.post("/dashboard/logout");

    // $.post("/login")
    // $(".login_page").add();
    // $("header").on("click", "#logout", () => {
    //   console.log('clicked');
    // //   // views_manager.show("dashboard");
    // // });









// });


