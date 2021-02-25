// 5.5.1
function camelize(str) {
  return str
    .split("-")
    .map((word, index) => {
      return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

camelize("background-color"); //== 'backgroundColor';
camelize("list-style-image"); //== 'listStyleImage';
camelize("-webkit-transition"); //== 'WebkitTransition';

// 5.5.2
function filterRange(arr, a, b) {
  return arr.filter((value) => {
    return a <= value && value <= b;
  });
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (マッチした値)

console.log(arr); // 5,3,8,1 (修正されていない)

// 5.5.3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (a > arr[i] || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1 から 4 までの値以外を削除

console.log(arr); // [3, 1]

// 5.5.4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => {
  return b - a;
});

console.log(arr); // 8, 5, 2, 1, -10

// 5.5.5
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)

// 5.5.6
function Calculator() {
  let methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = (str) => {
    let arr = str.split(" ");
    a = +arr[0];
    op = arr[1];
    b = +arr[2];
    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return methods[op](a, b);
  };
  this.addMethod = (op, func) => {
    if (methods[op]) return;
    methods[op] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

// 5.5.7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);

alert(names); // John, Pete, Mary

// 5.5.8
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => {
  return {
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  };
});

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith

// 5.5.9
function sortByName(arr) {
  arr.sort((a, b) => {
    return a.name < b.name ? 1 : -1;
  });
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [john, pete, mary];

sortByName(arr);

// now: [john, mary, pete]
alert(arr[1].name); // Mary

// 5.5.10
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 0 から i のランダムなインデックス
    [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替えます
  }
}

let arr = [1, 2, 3];

shuffle(arr);
shuffle(arr);
shuffle(arr);

// 5.5.11
function getAverageAge(arr) {
  let t = arr.map((item) => item.age);
  let total = t.reduce((a, b) => {
    return a + b;
  });
  return total / arr.length;
}

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// 5.5.12
function unique(arr) {
  let result = [];
  for (let word of arr) {
    result.includes(word) || result.push(word);
  }
  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O

// 5.5.13
function groupById(users) {
  return users.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
