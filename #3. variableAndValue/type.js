let pi = 3.14;
console.log(pi);

pi = "원주율";
console.log(pi); // dynamic typed lang

// what is the difference between primitive & reference type
// in term of 'memory' ?

let x = 100;
const y = x; // is stored in new space in memory // make a direct copy
x = 99;
console.log(y); // original is changed. but copy is not changed.

let a = { count: 100 };
const b = a; // point at an address // is not stored in memory directly
a.count = 99;
console.log(b.count); // if original is changed, copy is also changed.

// primitive is stored in a fixed size in memory
// but reference type is stored unsecured size in memory

// 1. number (Integer / Float)

// 2. string

// escape sequence
console.log("apple \n banana, pineapple"); // 개행 문자

console.log("apple \n banana, \0 pineapple "); // null 문자

// 3. Boolean

// 'is' is appended to the name of the variable
// that represent Boolean

// 4. undefined, null

const i = 3;
console.log(3);

const j = Symbol(3);
console.log(i === j);

const NONE = Symbol("none");
const cell = NONE;
console.log(cell === NONE);
