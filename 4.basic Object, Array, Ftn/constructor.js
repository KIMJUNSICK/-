// it it customary to
// name the first letter in capital letters.
function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

// create an object => assign to variable
// call this 'instance' customarily
// javascript have no class
const card1 = new Card(2, "heart");
const card2 = new Card(4, "spade");
const card3 = new Card("king", "diamond");

console.log(card1);
console.log(card2);
console.log(card3);

function Particle(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.velocity = Math.sqrt(vx * vx + vy * vy);
}

const p1 = new Particle(1, 1, 12, 12);
console.log(p1);
