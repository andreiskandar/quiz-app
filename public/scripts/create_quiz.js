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
  const r1 = $createForm.find('#create-answer1-radio-btn').val()
  const r2 = $createForm.find('#create-answer2-radio-btn').val()
  const r3 = $createForm.find('#create-answer3-radio-btn').val()
  const r4 = $createForm.find('#create-answer4-radio-btn').val()
  console.log(category, question, a1, a2, a3, a4)
  const sortOrder1 = 1
  const sortOrder2 = 2
  const sortOrder3 = 3
  const sortOrder4 = 4
  let correctAnswer1 = false
  let correctAnswer2 = false
  let correctAnswer3 = false
  let correctAnswer4 = false

  if($createForm.find('#create-answer1-radio-btn').is(':checked')) {
    correctAnswer1 = true;
    console.log("it's checked");
  }
  if($createForm.find('#create-answer2-radio-btn').is(':checked')) {
    correctAnswer2 = true;
     console.log("it's checked");
    }
  if($createForm.find('#create-answer3-radio-btn').is(':checked')) {
    correctAnswer3 = true;
    console.log("it's checked");
  }
  if($createForm.find('#create-answer4-radio-btn').is(':checked')) {
    correctAnswer4 = true;
    console.log("it's checked");
  }

  // if($('#create-answer3-radio-btn').is(':checked')) { alert("it's checked"); }

  // $.post( "/quizzes/create", { category, question, a1, a2, a3, a4 } );

  // quizzes/:quiz_id ???
  $.post('/quizzes/create-quiz', {category} )
  // quizzes/:quiz_id/questions/:question_id
  $.post('quizzes/:quiz_id/questions/create-question', {question})
  // quizzes/:quiz_id/questions/:question_id/answers/:answer_id
  $.post('quizzes/:quiz_id/questions/:question_id/answers/create-answer', {a1, a2, a3, a4, sortOrder1, sortOrder2, sortOrder3, sortOrder4, correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4})
  //maybe do this and split into smaller chunks!

})

$(() => {

})
