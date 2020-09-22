//changes the header based on user type/permission level
const getUserType = () => {
  return $.get("/login");
};
