// 2.7.1
// 表示される

// 2.7.2
let input = prompt("What's the “official” name of JavaScript?");
if (input === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don't know? ECMAScript!");
}

// 2.7.3
let input = prompt("Type a number");
if (+input >= 1) {
  alert(1);
} else if (+input < 0) {
  alert(-1);
} else {
  alert(0);
}

// 2.7.4
result = a + b < 4 ? "Below" : "Over";

// 2.7.5
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
