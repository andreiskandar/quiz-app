$createForm = $("#main-content");

// let isCreatingQuiz = false;
// let quiz_id;
// let quizIdtoGive = isCreatingQuiz ? quiz_id -1 : quiz_id
//for the back button
$(document).on("click", ".fas", function (e) {
  getQuizzes();
});

$(document).on("submit", ".question_form_body", function (e) {
  e.preventDefault();
  const category = $createForm.find("#category_textarea").val();
  const question = $createForm.find("#question_textarea").val();
  const a1 = $createForm.find("#answer1-textarea").val();
  const a2 = $createForm.find("#answer2-textarea").val();
  const a3 = $createForm.find("#answer3-textarea").val();
  const a4 = $createForm.find("#answer4-textarea").val();
  const r1 = $createForm.find("#create-answer1-radio-btn").val();
  const r2 = $createForm.find("#create-answer2-radio-btn").val();
  const r3 = $createForm.find("#create-answer3-radio-btn").val();
  const r4 = $createForm.find("#create-answer4-radio-btn").val();
  //TODO: throw in another var for our private quiz switch
  let isPublic = true;

  if ($createForm.find("#setpublic").is(":checked")) {
    isPublic = false;
  }

  const questionSortOrder = 1;
  const sortOrder1 = 1;
  const sortOrder2 = 2;
  const sortOrder3 = 3;
  const sortOrder4 = 4;
  let correctAnswer1 = false;
  let correctAnswer2 = false;
  let correctAnswer3 = false;
  let correctAnswer4 = false;

  if ($createForm.find("#create-answer1-radio-btn").is(":checked")) {
    correctAnswer1 = true;
  }
  if ($createForm.find("#create-answer2-radio-btn").is(":checked")) {
    correctAnswer2 = true;
  }
  if ($createForm.find("#create-answer3-radio-btn").is(":checked")) {
    correctAnswer3 = true;
  }
  if ($createForm.find("#create-answer4-radio-btn").is(":checked")) {
    correctAnswer4 = true;
  }

  // if($('#create-answer3-radio-btn').is(':checked')) { alert("it's checked"); }

  // $.post( "/quizzes/create", { category, question, a1, a2, a3, a4 } );

  // http://localhost:3000/quizzes/:quiz_id

  let quiz_id;
  $.post("/quizzes/create-quiz", { category, isPublic })
    .then((quiz_id_response) => {
      quiz_id = quiz_id_response[0].id;
      return $.post(`/quizzes/${quiz_id}/questions/create-question`, {
        question,
        questionSortOrder,
        quiz_id,
      });
    })
    .then((question_id_response) => {
      const question_id = question_id_response[0].id;

      const createAnswerPost = `/quizzes/${quiz_id}/questions/${question_id}/answers/create-answer`;
      console.log("createAnswerPost:", createAnswerPost);

      const promise1 = $.post(createAnswerPost, {
        a1,
        sortOrder1,
        correctAnswer1,
      });
      const promise2 = $.post(createAnswerPost, {
        a2,
        sortOrder2,
        correctAnswer2,
      });
      const promise3 = $.post(createAnswerPost, {
        a3,
        sortOrder3,
        correctAnswer3,
      });
      const promise4 = $.post(createAnswerPost, {
        a4,
        sortOrder4,
        correctAnswer4,
      });

      Promise.all([promise1, promise2, promise3, promise4]).catch((e) =>
        console.log("promise all answers queries", e)
      );
      isCreatingQuiz = true;
    });

  //show the user positive feedback!
  const sucessMsg = $createForm.find(".hidden")
  $(sucessMsg).fadeIn().fadeOut('slow')
  //clear all of the inputs
  $createForm.find("#category_textarea").val("");
  $createForm.find("#question_textarea").val("");
  $createForm.find("#answer1-textarea").val("");
  $createForm.find("#answer2-textarea").val("");
  $createForm.find("#answer3-textarea").val("");
  $createForm.find("#answer4-textarea").val("");
  $createForm.find("#create-answer1-radio-btn").prop("checked", false);
  $createForm.find("#create-answer2-radio-btn").prop("checked", false);
  $createForm.find("#create-answer3-radio-btn").prop("checked", false);
  $createForm.find("#create-answer4-radio-btn").prop("checked", false);
  // $createForm.find("#setpublic").prop("checked", false)
  // TO DO get from quiz_id_response
  //   let quiz_id = 2
  //   // $.get(`quizzes/:quiz_id/questions/`).then(id =>{
  //      current_question_id = id
  //     return
  //   })
});
