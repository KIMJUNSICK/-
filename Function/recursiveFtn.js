// Recursive Ftn

const factorial = n => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(3));

// arguments.callee is for using Ftn currently running
const fact = function(n) {
  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
};
console.log(fact(4));

// recusive Ftn have got to have condition that stop running

// recursive Ftn is used to solve problem
// problem that can be easily solved by recursive Ftn
