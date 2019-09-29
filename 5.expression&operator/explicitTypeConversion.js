const log = console.log;

// number => string
log(10 + "string"); // '10string'
log(100 + ""); // "100"
const a = "0000" + 12;
log(a.slice(-4));

const n = 26;
log(n.toString()); // '26'
log(String(n)); // '26'

// string => number
// implicit
const b = "2";
log(+b); // 2
log(b - 0); // 2

// explicit
log(parseInt("3.14"));
log(parseFloat("3.14"));
log(parseInt("101", 2));

log(Number("2.123")); // 2.123
log(Number(true)); // 1
log(Number(null)); // 0
log(Number(undefined)); // NaN

// to Boolean
const x = null;
log(!x); // true
log(!!x); // false

log(Boolean(x)); // false
