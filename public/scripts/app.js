<<<<<<< HEAD
//this file is routing to GET/API/USERS - we don't have an API we can route to?
// GET /api/users 404 1.418 ms - 148
// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });
=======
$(() => {
  // bind button to radio button
  $(`.option1-btn`).click(() => {
    console.log("button click");
    // $(`.option1-btn`);
    $(`#option1`).attr("checked", "checked");
  });

  $.ajax({
    method: "GET",
    url: "/api/users",
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});
>>>>>>> index
