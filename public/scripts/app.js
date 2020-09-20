$(() => {
  $("#facilitator_btn").click(function (e) {
    $(location).attr("href", "http://localhost:3000/dashboard");

    // $.post("http://localhost:3000/dashboard");
    // $.ajax({
    //   url: "/dashboard",
    // });
    const el = `<h1>home</h1>`;
    $();
    console.log("homeRoutes");

    e.preventDefault();
  });
  $("form").submit(function (e) {
    $(location).attr("href", "http://localhost:3000/dashboard");
    // $.post("/dashboard");
    console.log("post");
    e.preventDefault();
  });
});
