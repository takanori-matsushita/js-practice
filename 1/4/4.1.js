// 4.1.1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pate";
delete user.name;
console.log(user);

// 4.1.2
function isEmpty(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

// 4.1.3
// 変更可能

// 4.1.4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// 4.1.5
// 呼び出し前
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

let res = multiplyNumeric(menu);

console.log(res);

// 呼び出し後
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };
