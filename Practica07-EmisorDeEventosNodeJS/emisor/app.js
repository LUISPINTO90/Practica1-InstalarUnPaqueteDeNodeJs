const Emitter = require("events");
const config = require("../config");

const emtr = new Emitter();

emtr.on(config.events.GREET, () => {
  console.log("Somewhere, someone said hello.");
});

emtr.on(config.events.GREET, () => {
  console.log("A greeting occurred!");
});

emtr.on(config.events.JUMP, () => {
  console.log("Someone jumped!");
});

console.log(emtr);
emtr.emit(config.events.GREET);
emtr.emit(config.events.JUMP);
