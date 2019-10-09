// generator definition
function* gen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const iter = gen();

for (const v of iter) console.log(v);

function* createNumbers(from, to) {
  while (from <= to) yield from++;
}

const iter2 = createNumbers(10, 20);
for (const v of iter2) console.log(v);

