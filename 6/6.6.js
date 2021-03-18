// 6.6.1
function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);
  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();
console.log(counter()); // 10
counter.set(5);
console.log(counter());
counter.decrease();
console.log(counter());

// 6.6.2
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15
