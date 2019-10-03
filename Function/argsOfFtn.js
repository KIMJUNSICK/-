// Arguments of Ftn

// omission of Args

const f1 = (a, b) => console.log(a, b);
f1(1); // 1, undefined

const f2 = (a, b) => {
  b = b || 1;
  console.log(a, b);
};
f2(3);

// obj of Arguments
// could use arguments for forming Ftn have arguments.length that not static
function add(a, b) {
  arguments[0] = 2;
  console.log(a + b);
}
add(1, 2);

function add2(a, b) {
  if (arguments.length < 2) {
    b = 0;
  }
  console.log(a + b);
}
add2(1);

function myConCat(seperator) {
  let s = "";
  for (let i = 1; i < arguments.length; i++) {
    s += arguments[i];
    if (i < arguments.length - 1) s += seperator;
  }
  console.log(s);
}

myConCat("/", "asd", "asda", "rter");
