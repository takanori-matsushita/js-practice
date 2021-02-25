// 5.2.1
let first = +prompt("The first number?");
let second = +prompt("The second number?");
console.log(first + second);

// 5.2.2
console.log(Math.round(6.35 * 10) / 10);

// 5.2.3
function readNumber() {
  let num;
  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));
  if (num == null || num == undefined) {
    return null;
  }
  return +num;
}
readNumber();
// 5.2.4
// 小数を利用する場合正確な値にならないため

// 5.2.5
function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5));

// 5.2.6
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(1, 5));
