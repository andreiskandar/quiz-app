$(() => {
  $("header").on("click", ".browse_btn", () => {
    $.get("/dashboard/my-quizzes", (data) =>{
      console.log(data)
      for(quizzes of data){
        console.log(quizzes)
      }

    })
  });
});
