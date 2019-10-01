// while
const factorial = n => {
  let k = 1,
    i = 1;
  while (i < n) {
    console.log("k", k, "i", i);
    k = k * ++i;
  }
  console.log(k);
};
factorial(7);

const linearSearch = (standard, array) => {
  let i = 0;
  while (i < array.length && standard > array[i]) i++;
  if (standard == array[i]) return i;
  return null;
};
const increase = [1, 2, 3, 4, 5, 6, 67, 101, 23423, 21323001];
console.log(linearSearch(4, increase));

// binarySearch, prerequisite: the array is arranged in ascending orders
const binarySearch = (target, array) => {
  const n = array.length;
  let left = 0,
    right = n - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (target <= array[middle]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  if (target == array[right]) return right;
  return null;
};

const asecnding = [
  1,
  2,
  3,
  4,
  5,
  7,
  8,
  8,
  10,
  12,
  14,
  19,
  23,
  34,
  45,
  56,
  87,
  89,
  123,
  234,
  345,
  456
];
console.log(binarySearch(10, asecnding));

const sqrt = n => {
  const EPSILON = 1.0e-10;
  let d, xnew, xold;
  xold = n > 1 ? n : 1.0;
  do {
    xnew = xold - (xold * xold - n) / (2.0 * xold);
    d = (xold - xnew) / xold;
    xold = xnew;
  } while (d > EPSILON);
  {
    console.log(xnew);
  }
};
sqrt(5);

//for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 1, sum = 0; i < 11; i++) {
  if (i == 10) console.log(sum);
  sum += i;
}

for (let i = 0, j = 10; i <= 10; i++, j--) {
  console.log(i, j);
}

console.clear();

// superposition 'for'
const n = 20;
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    for (let c = 1; c <= n; c++) {
      if (a * a + b * b == c * c) {
        console.log(a, b, c);
      }
    }
  }
}

// for/in
const obj = { x: 1, y: 3, z: 3 };
for (let p in obj) {
  console.log("p = " + p);
}
