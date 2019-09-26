const card = { suit: "heart", rank: "4" };

console.log(card.rank); // Obj.name (not string)
console.log(card["rank"]); // Obj["string"]

// add new property
card.color = "red";
console.log(card);

// remove property
delete card.rank;
console.log(card);

console.log("suit" in card); // true
console.log("rank" in card); // false
console.log("toString" in card); // true
// => inherited from prototype

const p = { x: 1.0, y: 2.0 };

const circle = {
  center: { x: 1.0, y: 2.0 },
  radius: 4.0
};

console.log(circle);
console.log(circle.radius);
console.log(circle.center.x); // Obj in Obj

// Obj is reference type, have address t
// that point at position in memory

const a = card;
console.log(a); // refer to something that card pointed at
