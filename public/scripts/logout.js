$(document).ready(() => {


  $('.logout_btn').click(function(e)  {
    console.log("clicked")
    $("header").hide();
    $.post("/dashboard/logout");

    // $.post("/login")
    $(".login_page").add();



});
});

