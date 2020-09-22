//changes the header based on user type/permission level
const getUserType = () => {
  return $.get("/login");
};

const logOut = () => {
  return $.post("/dashboard/logout");
};

const getQuizzesByUserId = (id) => {
  console.log("from network.js");
  return $.get("/quizzes/:id");
};
