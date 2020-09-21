const getUserType = () => {
  return $.get("/users/me");
};
