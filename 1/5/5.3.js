// 5.3.1
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john") == "John");

// 5.3.2
function checkSpam(str) {
  lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy ViAgRA now") == true);
console.log(checkSpam("free xxxxx") == true);
console.log(checkSpam("innocent rabbit") == false);

// 5.3.3
function truncate(str, max) {
  return str.length > max ? str.slice(0, max - 1) + "…" : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); // = "What I'd like to te…"

console.log(truncate("Hi everyone!", 20)); // = "Hi everyone!"

// 5.3.4
function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$120") === 120); // true
