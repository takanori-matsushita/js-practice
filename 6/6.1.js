// 6.1.1
function sumTo(x) {
  let num = 0;
  for (let i = 0; i <= x; i++) {
    num += i;
  }
  return num;
}

function sumTo2(x) {
  return x == 1 ? x : (x += sumTo2(x - 1));
}
console.log(sumTo(1)); //= 1
console.log(sumTo(2)); //= 2 + 1 = 3
console.log(sumTo(3)); //= 3 + 2 + 1 = 6
console.log(sumTo(4)); //= 4 + 3 + 2 + 1 = 10

console.log(sumTo2(1)); //= 1
console.log(sumTo2(2)); //= 2 + 1 = 3
console.log(sumTo2(3)); //= 3 + 2 + 1 = 6
console.log(sumTo2(4)); //= 4 + 3 + 2 + 1 = 10

// 6.1.2
function factorial(n) {
  return n == 1 ? n : n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 6.1.3
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

// 6.1.4
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// loop
function printList(list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

// 再帰
function printList2(list) {
  console.log(list.value);
  if (list.next) {
    printList2(list.next);
  }
}

printList(list);
printList2(list);

// 6.1.5
let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// 再帰
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  console.log(list.value);
}

// loop
function printReverseList2(list) {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseList(list2);
printReverseList2(list2);
