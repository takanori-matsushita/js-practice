let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let num = 0;
while (num < 100 || num == null || num == "") {
  num = prompt("Enter a number greater than 100?", 0);
  if (num > 100 || num == null || num == "") {
    break;
  }
}

// 上と同じ
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = prompt("Please input number", 10);
nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue nextPrime;
    }
  }
  alert(i);
}
