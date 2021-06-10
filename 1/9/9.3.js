const Clock = require("./9.2");

// 9.3.1
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // エラー: 定義されていません
console.log(rabbit.name);

// 9.3.2
class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this._precision = precision;
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), this._precision);
  }
}

let clock = new ExtendedClock({ template: "h:m:s", precision: 10000 });
clock.start();

// 9.3.3
class Rabbit2 extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit2 = new Rabbit2("Rab");

console.log(rabbit2.hasOwnProperty("name")); // true
