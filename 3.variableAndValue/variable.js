// hoisting of variavble
console.log(x); // not error
var x;

// no hoisting
console.log(y); // undefined, not 3
var y = 3;
console.log(y); // 3

var a = 3;
var a = 4;
console.log(a); // not error

const c = 2;
const c = 3;
console.log(c); // error, already declare c
