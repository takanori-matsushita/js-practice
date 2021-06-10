// 6.1.1
let name = "John";
function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";

sayHi(); // 何が表示される？: "John" or "Pete"?
// Peteが表示される

// 6.1.2
function makeWorker() {
  let name2 = "Pete";
  return function () {
    console.log(name2);
  };
}
let name2 = "John";
// 関数を作成
let work = makeWorker();

// 呼び出し
work(); // 何が表示されるでしょう?
// Peteが表示される

// 6.1.3
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // ? 0
console.log(counter2()); // ? 1

// 6.1.4
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter3 = new Counter();

console.log(counter3.up()); // ? 1
console.log(counter3.up()); // ? 2
console.log(counter3.down()); // ? 1

// 6.1.5
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // ifブロックの中に関数が定義されているためエラーとなる

// 6.1.6
function sum(a) {
  return function (b) {
    return a + b;
  };
}

sum(1)(2); // = 3
sum(5)(-1); // = 4

// 6.1.7
let x = 1;

function func() {
  console.log(x); // ? エラーになる

  let x = 2;
}

func();

// 6.1.8
/* .. your code for inBetween and inArray */
function inBetween(a, b) {
  return function (x) {
    return x >= a && b >= x;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

// 6.1.9
function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

users.sort(byField("name"));
users.sort(byField("age"));

// 6.1.10
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // 射手(shooter) 関数
      console.log(i); // その番号を表示するべき
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 射手 番号 0 表示 10
army[5](); // また 番号 5 ですが表示は 10...
// ... すべての射手は 0, 1, 2, 3... の代わりに 10 が表示されます
