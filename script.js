document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    window.location.href = "courses.html";
  } else {
    alert("Invalid login credentials!");
  }
});

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;

  localStorage.setItem("username", newUsername);
  localStorage.setItem("password", newPassword);

  alert("Signup successful! Now login.");
  showLogin();
});

function showSignup() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

function showLogin() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}