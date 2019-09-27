// after return, no Line Break

// Ftn name
// Ftn call, example: Ftn(args)
// Ftn args

const f1 = () => console.log("f1");
f1(); // "f1"

// Ftn Declarations //  vs.Ftn Expressions
function f2() {
  "f2";
}

console.log(f2()); // undefined

function f3() {
  return "f3";
}

console.log(f3()); // "f3"

// if Ftn don't have return
// when call Ftn result is "undefined"

// hoisting of Ftn
console.log(f4());
function f4() {
  return "f4";
}

// call by value
// Assign copy of value directly
const add = x => x + 1;
const a = 3;
const b = add(a);
console.log(a, b); // a is not changed

console.clear();

// call by reference
// refer to Obj
const add2 = p => {
  p.x = p.x + 1;
  p.y = p.y + 1;
  return p;
};
const c = { x: 1, y: 2 };
const d = add2(c);
console.log(c, d); // value of c is changed

// convey args to Ftn in an elegaant way
// not elegant

const setBallProperties = (x, y, vx, vy, radius) =>
  console.log(`${x},${y}.${vx},${vy},${radius}`);

setBallProperties(1, 1, 2, 2, 4);

const parameters = {
  x: 1,
  y: 2,
  vx: 3,
  vy: 4,
  radius: 5
};

// elegant way
function setBallProperties2(params) {
  console.log(
    `${params.x},${params.y}.${params.vx},${params.vy},${params.radius}`
  );
}

setBallProperties2(parameters);

// scope
// lexical scope // dynamic scope
// javascript chose lexical scope

// scope: global scope
// scope: local scope

// collision of variable
const gl = "global";
const ftn = () => {
  const gl = "local";
  console.log(gl);
  return gl;
};

ftn(); // local
console.log(gl); // global

// 이름은 같아도 메모리가 다르게 할당된다.

// hoisting in Ftn
const ftn2 = () => {
  console.log(a);
  var a = "local"; // undefined
  console.log(a);
  return a;
};
ftn2();

// const / let
// let don't hoisting
// Can't declare as same as other's name in using 'let'

// Ftn literal = Ftn expressions
// Ftn declared in a way of expressions is not hoisted
var squre = function(x) {
  console.log(x * x);
  return x * x;
};

squre(5);

const squre2 = x => x * x;

// Obj method

const circle = {
  center: { x: 1.0, y: 2.0 },
  radius: 3,
  area: function() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area());

circle.translate = function(a, b) {
  this.center.x = this.center.x + a;
  this.center.y = this.center.y + b;
};
// arrow Ftn do not bind 'this'

console.log(circle.translate);

circle.translate(1, 1);

console.log(circle.center);
