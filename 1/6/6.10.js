const readlineSync = require("readline-sync");

// 6.10.1

function f() {
  console.log(this); // ? null
}

let user = {
  g: f.bind(null),
};

user.g();

// 6.10.2
function f2() {
  console.log(this.name);
}

f2 = f2.bind({ name: "John" }).bind({ name: "Ann" }); // 関数を再バインドすることはできない。よってJohnが出力される。

f2();

// 6.10.3
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John",
});

console.log(bound.test); // 何が出力されるでしょう? それはなぜでしょう?

// undefined bind の結果は別のオブジェクトです。それは test プロパティを持っていません。

// 6.10.4
function askPassword(ok, fail) {
  console.log("Password?");
  let password = readlineSync.question("Password?");
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: "John",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user2.loginOk.bind(user2), user2.loginFail.bind(user2));
