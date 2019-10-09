// iterator

const numbers = [1, 2, 3, 43, 4, 5, 10, 7];
const iter = numbers[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.clear();

const makeIterator = array => {
  let index = 0;
  return {
    next: () => {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
};

const iter2 = makeIterator([1, 2, 3, 4]);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.clear();

const strings = ["a", "b", "c"];
const iter3 = strings[Symbol.iterator]();
while (true) {
  const iteratorResult = iter3.next();
  if (iteratorResult.done == true) break;
  const v = iteratorResult.value;
  console.log(v);
}

// for/of
for (const v of strings) console.log(v);


