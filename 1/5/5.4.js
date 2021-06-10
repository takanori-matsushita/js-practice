// 5.4.1
// 4
// 参照コピーされるため配列に追加した値も表示される

// 5.4.2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");

// 5.4.3

// 5.4.4
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("A number please?", 0);
    if (value == "" || value == null || !isFinite(value)) {
      return numbers.reduce((a, b) => {
        return a + b;
      });
    }
    numbers.push(+value);
  }
}
console.log(sumInput());

// 5.4.5
