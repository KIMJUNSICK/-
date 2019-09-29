console.log(1 + "2month"); // '12month'

console.log(true + true); // 1+1 = 2
console.log(1 + null); // 1, null = 0
console.log(1 + undefined); // NaN

let a = 1;
const b = a++;
console.log(b); // 2
console.log(a); // 1

const c = a++ + 2;
console.log("a", a, "c", c); // a===3, c ===4

let x = 1;
const y = 2;
console.log((x += y));
console.log(x);
