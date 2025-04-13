const login = document.getElementById("login");
const signup = document.getElementById("signup");
const buttonLogIn = document.querySelector(".loginbut");
const buttonSignUp = document.querySelector(".signupbut");

buttonLogIn.addEventListener("click", () =>{
  login.style.display = "flex";
  signup.style.display = "none"
});

buttonSignUp.addEventListener("click", () =>{
  login.style.display = "none";
  signup.style.display = "flex";
});