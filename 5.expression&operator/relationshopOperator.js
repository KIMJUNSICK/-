// identical operator

const log = console.log;

const a = [1, 2, 3];
const b = [1, 2, 3];
const c = a;

log(a == b); // false // because refer to different memory
log(a == c); // ture

// different type
log(null == undefined); // true
log(true == "1"); // true
log(true == 1); // true
log(new String(1) == 1); // true
log(new Number(1) == 1); // true

// matching operator

log(NaN === NaN);

log(null === undefined); // false
log(true === "1"); // false
log(true === 1); // false
log(new String(1) === 1); // false
log(new Number(1) === 1); // false
