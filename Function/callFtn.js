// Call Ftn

// How to call Ftn

// 1. with ()
// like 'Ftn(3)'
// 2. method
// 3. Constructor
// 4 with call & apply

// immediately-invoked Ftn expressions
((a, b) => a + b)(1, 2);

// assign value to variable immediately
const result = ((a, b) => a * b)(2, 3);
console.log(result);

// name of Ftn is valid in inner of Ftn
console.log(
  (function add(a, b) {
    return a + b;
  })(2, 3)
);
