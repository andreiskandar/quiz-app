$(document).on('click', '.clickable', function(e){
    console.log(e.target)
  const quizID = e.target.id
  localStorage.setItem('quiz_id', quizID)
  console.log(localStorage.getItem('quiz_id'), "in quizListener.js")
  views_manager.show("quizForm");
})

$(() => {

// $('#main-content').closest()('click', function(){
//   console.log("I do exist")
// } )


// $('#main-content').click('.clickable', function(e) {
//   console.log(e.target)
//   const quizID = e.target.id
//   localStorage.setItem('quiz_id', quizID)
//   console.log(localStorage.getItem('quiz_id'), "in quizListener.js")
//   views_manager.show("quizForm");
// });

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
