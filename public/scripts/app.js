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
