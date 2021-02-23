// 4.4.1

// 4.4.2
let calculator = {
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 4.4.3
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // 現在の段を表示します
    alert(this.step);
    return this;
  },
};
