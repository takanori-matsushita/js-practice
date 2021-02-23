function checkAge(age) {
  return age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
}

function checkAge(age) {
  return (
    age > 18 ||
    confirm("Do you have your parents permission to access this page?")
  );
}

//
const min = (a, b) => {
  return a > b ? a : b;
};

//
const pow = (x, n) => {
  return x ** n;
};

const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);
