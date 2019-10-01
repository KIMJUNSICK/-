let a = 3;
if (a > 0) a++;
console.log(a);

let name;
if (!name) {
  name = "name";
  message = "what's your name?";
}
console.log(name);

const isLeapYear = year => {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
};
console.log(isLeapYear(2019));

// Measure blood pressure
const instrumentForBloodPressure = (relaxtion, constriction) => {
  if (relaxtion < 80 && constriction < 120) {
    return "Normal";
  } else if (80 <= relaxtion < 89 || 120 <= constriction < 139) {
    return "Danger";
  } else {
    return "High Blood Pressure";
  }
};
console.log(instrumentForBloodPressure(79, 110));

// switch

const calcurator = (a, b, operator) => {
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    case "^":
      console.log(Math.pow(a, b));
      break;
    case "%":
      console.log(a % b);
      break;
    default:
      console.log("I don't know");
  }
};

calcurator(2, 3, "^");
calcurator(2, 3, "+");
calcurator(2, 3, "/");
calcurator(2, 3, "%");
