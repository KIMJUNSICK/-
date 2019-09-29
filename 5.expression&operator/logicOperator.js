// logic operator

const x = 1,
  y = 0;

console.log(x > 0 && y > 0); // false
console.log(x > 0 || y > 0); // true
console.log(!(x > 0 && y > 0)); // true

// short-circuit evaluation
let p = null;
console.log(p && p.name); // null // not evaluate the right => no error
p = { name: "junsik", age: 25 };
console.log(p && p.name); // junsik

const time_interval = null;
const animationSettings = null;
const time = time_interval || animationSettings || 33;
console.log(time);
