$(document).ready(() => {
  //timely reminder - we are having to target clickable elems thrugh header, the reason is unknown at present
  $("header").on("click", "#logout", () => {
    logOut().then(() => {
      header.update(null);
    });

    //hide the header - do we need to completely destroy these elements for a different user logging in?
    $("header").hide();
    $("#main-content").hide();
    //remove user cookie
    $.post("/dashboard/logout");
    //add the login page
    views_manager.show("login");
    // $(".login_page").show();
    //route to logout to remmove cookie
  });
});
