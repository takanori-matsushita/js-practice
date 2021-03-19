// 6.8.1
// setIntervalの場合;
function printNumbers(from, to) {
  let current = from;
  let timer = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timer);
    }
    current++;
  }, 1000);
}

// setTimeoutの再帰を利用する場合
function printNumbers2(from, to) {
  let current = from;
  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbers(1, 10);
printNumbers2(1, 10);

// 6.8.2
let n = 0;
let start = Date.now();
function count() {
  for (let j = 0; j < 1000000; j++) {
    n++;
  }

  if (n == 1000000000) {
    console.log("Done in " + (Date.now() - start) + "ms");
    clearInterval(timer);
  }
}
let timer = setInterval(count, 0);

// 6.8.3

let ii = 0;

setTimeout(() => console.log(ii), 100); // ?

// この関数を実行する時間は 100ms より多いと仮定する
for (let j = 0; j < 100000000; j++) {
  ii++;
}
