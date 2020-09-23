$createForm = $('#main-content')
$(document).on('submit', '.question_form_body', function(e) {
  e.preventDefault()
  console.log($(e).serialize())
  const category = $createForm.find('#category_textarea').val()
  const question = $createForm.find('#question_textarea').val()
  const a1 = $createForm.find('#answer1-textarea').val()
  const a2 = $createForm.find('#answer2-textarea').val()
  const a3 = $createForm.find('#answer3-textarea').val()
  const a4 = $createForm.find('#answer4-textarea').val()
  const a4 = $createForm.find('#answer4-textarea').val()
  console.log(category, question, a1, a2, a3, a4)

  $.post( "/quizzes/create", { category, question, a1, a2, a3, a4 } );

  ////localhost:3000/quizzes/:quiz_id/questions/:question_id/answers/:answer_id

  //maybe do this and split into smaller chunks!

})

$(() => {
  // $('.question_form_body').submit((e) => {
  //   e.preventDefault()
  // })

  // $('#main-content').on('submit', '#create-form', function(e) {
  //   e.preventDefault()
  //   console.log(e)
  //   console.log(e.target)
  //   console.log(this)
  //   let queryString = $('#main-content form').serialize()
  //   console.log(queryString)
  // })


// $submitForm.on("submit", "#login-register", function (e) {
//   e.preventDefault();
//   console.log(e)
//     });
})
