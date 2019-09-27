// each value of Array is numberd === index

const a1 = [1, 2, 3, 4];
console.log(a1);

const a2 = [2, , 3, 4];
console.log(a2); // 2, undefined, 3, 4

const a3 = [2, "string", { name: "junsik", age: 25 }, [2, 3, 4]];
console.log(a3);
console.log(a2.length); // 3 + 1
console.log(a1.length);

a3.length = 2;
console.log(a3);

const evens = new Array(2, 4, 6, 8);
const empty = new Array(); // []

// Array(N)
const three = new Array(3);
console.log(three.length, three); // length === 3, empty Array

// reference
console.log(evens[2]); // 6

// Array of javascript is Obj
// imitate an array

const b = [1, 2, 3];
console.log(b["1"]); // ["string"] => not error

// c, java have array that assign element to memory orderly
// => so if use index, could read element more fast
// but javascript have no such array
// "TypedArray" plays this role in javascipt

b[4] = 5;
console.log(b); // [1,2,3, undefiend, 5]

delete b[2];
console.log(b); // [1,2,undefiend, undefined, 5]
// this is called spared array
// length of sparsed array is
// alwaays longer than the number of element

// confirm elements
for (let i in b) {
  console.log(i);
}
