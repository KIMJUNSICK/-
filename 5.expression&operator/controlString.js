const log = console.log;

log("hello" + "world"); //"helloworld"
log("!" + 2); // '!2'

let msg = "Everything is changed";
log(msg);
// like Obj, Array
// because when you try to use method, propertier
// automatically converted to an Obj or Array
// object that is created temporarily is called 'wrapper Obj'
// when operation finished, wrapper Obj is removed
log(msg.length);
log(msg.charAt(3));

// change primitive value to Obj
// // this is called 'wrapping' to Obj
msgObj = new String(msg);
log(msgObj); // type: Obj
log(msgObj.length);
log(msgObj.charAt(3));

console.clear();

// constructor of String have method
log(String.length); // always 1
log(String.fromCharCode(0xae38));
log(String.fromCharCode(65, 66, 67));
log(String.fromCharCode(0xd83d, 0xdcd6));
log(String.fromCodePoint(0x1f4d6));
log("\u{1f4d6}");

log(msg[3]);
log(msg[msg.length - 1]);
msg[3] = "R";
log(msg); // assignation don't work
