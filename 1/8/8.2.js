// 8.2.1
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

console.log(rabbit.eats); // true

// 1.
let rabbit1 = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit1.eats); // ? true

// 2.
let rabbit2 = new Rabbit();

Rabbit.prototype.eats = false;

console.log(rabbit2.eats); // ? false

// 3.
let rabbit3 = new Rabbit();

delete rabbit3.eats;

console.log(rabbit.eats); // ? true

// 4.
let rabbit4 = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit4.eats); // ? undefined

// 8.2.2
function User(name) {
  this.name = name;
}

let user = new User("John");
let user2 = new user.constructor("Pete");
console.log(user2.name);

User.prototype = {};
let user3 = new User("John");
let user4 = new user3.constructor("taka");
console.log(user4.name);
