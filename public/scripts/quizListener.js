$(document).on('click', '.clickable', function(e){
  localStorage.clear();
    console.log(e.target)
  const quizID = e.target.id
  localStorage.setItem('quiz_id', quizID)
  $.post('/dashboard/my-quizzes/question1', quizID).then((data) => {
    localStorage.setItem('question_id',data[0].id)
    return ;
  }).then(() => {
    views_manager.show("quizForm");
  })


})

$(() => {


});

