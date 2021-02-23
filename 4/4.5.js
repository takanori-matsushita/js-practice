// 4.5.1
obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}
let a = new A();
let b = new B();
console.log(a == b);
// 4.5.2
function Calculator() {
  (this.read = () => {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  }),
    (this.sum = () => {
      return this.a + this.b;
    });
  this.mul = () => {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// 4.5.3
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt("How much to add?", 0);
  };
}

let accumulator = new Accumulator(1); // 初期値 1
accumulator.read(); // ユーザの入力値の加算
accumulator.read(); // ユーザの入力値の加算
alert(accumulator.value); // それらの値の合計を表示
