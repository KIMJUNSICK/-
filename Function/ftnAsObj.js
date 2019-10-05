// apply , call
function saySomething(something, something2) {
  console.log(something + " " + something2 + " " + this.myName);
}

const junsik = { myName: "junsik" };

saySomething.apply(junsik, ["kimchi", "family"]);
saySomething.call(junsik, "kimchi", "family");

//bind
const sayToJunsik = saySomething.bind(junsik);
console.log(sayToJunsik("kimchi", "family"));

// memoization
// example: fibonacci

function fibonacci(n) {
  if (n < 2) return n;
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return fibonacci[n];
}

for (let i = 0; i <= 20; i++) {
  console.log(i + ":" + fibonacci(i));
}
