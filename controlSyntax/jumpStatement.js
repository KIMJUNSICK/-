// lable: statement

const a = [2, 4, 6, 8, 10],
  b = [1, 3, 5, 6, 9];

loop: for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < b.length; j++) {
    if (a[i] == b[j]) break loop;
  }
}
console.log(`i is ${i}`, `j is ${j}`);

loop: for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] == b[j]) break loop;
  }
}
// console.log(`i is ${i}`, `j is ${j}`);
// => error, because use 'let'

const numbers = [1, 2, -4, 5, 72, 100, -23];
// for (var i = 0, sum = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     sum = sum + numbers[i];
//   }
// }

// continue
for (var i = 0, sum = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) continue;
  sum += numbers[i];
}

console.log(sum);

console.clear();

const twoD = [
  [1, 2, 3, 4, 5],
  [3, 4, 12, 7, 0],
  [1, -5, -6, 12, 34],
  [1.2, 3, -10, -20, -3],
  [1, 2, 6, 7, 8, 10]
];

let max = Number.NEGATIVE_INFINITY;

mainLoop: for (var i = 0; i < twoD.length; i++) {
  var average = 0;
  for (j = 0; j < twoD[i].length; j++) {
    if (twoD[i][j] > 10) continue mainLoop;
    average += twoD[i][j];
  }
  average /= twoD[i].length;
  console.log("i= " + i + ", average = " + average);
  if (max < average) max = average;
}

console.log("max average is " + max);
