// 5.8.1
let messages1 = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();
readMessages.add(messages1[0]);
readMessages.add(messages1[1]);

readMessages.add(messages1[0]);

console.log("Read message 0: " + readMessages.has(messages1[0]));
messages1.shift();

console.log(readMessages.has(messages1[0]));

// 5.8.2
let messages2 = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMap = new WeakMap();
readMap.set(messages2[0], new Date());
console.log(readMap);
