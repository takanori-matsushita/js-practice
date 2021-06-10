// 8.1.1
let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // ? (1) true

delete rabbit.jumps;

console.log(rabbit.jumps); // ? (2) null

delete animal.jumps;

console.log(rabbit.jumps); // ? (3) undefined

// 8.1.2
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);

// 8.1.3
let animal2 = {
  eat() {
    this.full = true;
  },
};

let rabbit2 = {
  __proto__: animal2,
};

rabbit2.eat(); // rabbit にfullが追加される

// 8.1.4
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// 一方が食べ物を見つけました
speedy.eat("apple");
console.log(speedy.stomach); // apple

// もう一方も持っています。なぜでしょう？直してください。
console.log(lazy.stomach); // apple
