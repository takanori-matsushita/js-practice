const user = prompt("Who's there?");
if (user == "Admin") {
  const password = prompt("Password?");
  if (password == "TheMaster") {
    alert("Welcome!");
  } else if (!password) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (!user) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
