// Define Ftn

// Ftn declarations
// Ftn declarations allow the use of hoisting

// Ftn Expressions

// Define Ftn with Constructor

// Arrow Ftn

// Nested Ftn
function norm(x) {
  function sumSqure() {
    sum = 0;
    for (let i = 0; i < x.length; i++) sum += x[i] * x[i];
    return sum;
  }
  let sum2 = sumSqure();
  return Math.sqrt(sum2);
}

const a = [1, 2, 3, 4, 5];
console.log(norm(a));
