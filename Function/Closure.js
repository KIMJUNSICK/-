// Closure

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

const counter = makeCounter();
const counter2 = makeCounter();

console.log(counter());
console.log(counter2());
console.log(counter());
console.log(counter2());
console.log(counter());
console.log(counter2());
console.log(counter());
console.log(counter2());
console.log(counter());

console.clear();

const add_maker = a => {
  const c = 10;
  return function(b) {
    return a + b + c;
  };
};

const add10 = add_maker(10);
console.log(add10);
console.log(add10(10));

const Person = (name, age) => {
  let _name = name,
    _age = age;

  return {
    getName: () => _name,
    getAge: () => _age,
    setAge: x => (_age = x)
  };
};

const person = Person("junsik", 10);

console.log(person.getAge());
console.log(person.getName());
person.setAge(12);
console.log(person.getAge());
