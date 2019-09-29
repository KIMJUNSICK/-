const log = console.log;

// typeof

const s = "abc";
log(typeof s); // string

const junsik = { name: "junsik", age: 24 };
log(typeof junsik); // Obj

// conditional operator

let a = 3;
const parity = a % 2 == 0 ? "even" : "odd";
log(parity);

// , operator

let i = 0,
  sum = 0,
  prod = 1;

// eval Ftn
const x = 1;
console.log(eval("x++")); // string => js code
