// 9.1.1
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(this.name + " walks");
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.__proto__ = Animal.prototype;

Rabbit.prototype.walk = function () {
  console.log(this.name + " bounces!");
};

let rabbit = new Rabbit("rabbit");
rabbit.walk();

// 9.1.2
function Clock({ template }) {
  this._template = template;
}

Clock.prototype._render = function () {
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = "0" + hours;

  let mins = date.getMinutes();
  if (mins < 10) mins = "0" + mins;

  let secs = date.getSeconds();
  if (secs < 10) secs = "0" + secs;

  let output = this._template
    .replace("h", hours)
    .replace("m", mins)
    .replace("s", secs);

  console.log(output);
};

Clock.prototype.start = function () {
  this._render();
  this._timer = setInterval(() => this._render(), 1000);
};

Clock.prototype.stop = function () {
  clearInterval(this._timer);
};

clock = new Clock({ template: "h:m:s" });
clock.start();
setTimeout(() => clock.stop(), 5000);
