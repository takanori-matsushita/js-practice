// 8.4.1
// dictionary.toString メソッドを追加するあなたのコード
let dictionary = Object.create(null, {
  toString: {
    // toString プロパティの定義
    value() {
      // 値は関数です
      return Object.keys(this).join();
    },
  },
}); // データの追加
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ はここでは通常のプロパティキー

// ループでは apple と __proto__ だけです
for (let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// 実行時のあなたの toString です
console.log(dictionary); // "apple,__proto__"

// 8.4.2
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined
