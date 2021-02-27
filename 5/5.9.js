// 5.9.1
function sumSalaries(salaries) {
  let sum = 0;
  for (let value of Object.values(salaries)) {
    sum += value;
  }
  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

// 5.9.2
function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  age: 30,
};

console.log(count(user)); // 2
