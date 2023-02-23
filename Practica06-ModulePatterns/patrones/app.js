const greet = require("./greet1");
greet();

const greet2 = require("./greet2").greet;
greet2();

const greet3 = require("./greet3");
greet3.greet();
console.log(greet3);

greet3.greeting = "Hello from the App";

const greet3b = require("./greet3");
greet3b.greet();

const greet4 = require("./greet4");
let myGreet = new greet4();
myGreet.greet();

const greet5 = require("./greet5");
greet5.greet();

greet5.running();
greet5.jumping();