$(() => {

$('#main-content').click('.clickable', function(e) {
  console.log(e.target)
  window.quiz_id = e.target.id
  $.get(`/quizzes/${window.quiz_id}/`, () => {
    console.log("hello");
    views_manager.show(null, window.$quizForm);
});
});

});


// $(() => {

//   $('#main-content').click('.clickable', function(e) {
//     console.log(e.target)
//     let id = e.target.id
//     $.get(`/quizzes/${id}`, () => {
//       console.log("hello");
//       views_manager.show(null, window.$dynamicQuizForm);
//   });
//   });

//   });
