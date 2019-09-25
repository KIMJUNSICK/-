function factorial(n) {
  if (n <= 1) return n;
  return n * factorial(n - 1);
}

for (var i = 1; i < 10; i++) {
  console.log(i + "! = " + factorial(i));
}

// how to execute js
// 1. with console
// 2. with html
// 3. with node
