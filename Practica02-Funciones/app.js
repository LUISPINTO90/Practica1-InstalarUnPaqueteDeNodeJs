// Refactor de greet() a una arrow function
const greet = () => {
  console.log("Hello World!");
};
greet();

// Refactor de logGretting() a una arrow function
const logGreeting = (fn) => {
  fn();
};
logGreeting(greet);

// Refactor de greetMe() a una arrow function

const greetMe = () => {
  console.log("Hello from the function expression!");
};
greetMe();
