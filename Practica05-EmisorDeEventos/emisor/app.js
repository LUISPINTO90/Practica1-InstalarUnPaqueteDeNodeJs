const Emitter = require("./emitter");

const emtr = new Emitter();

emtr.on("greet", () => {
  console.log("Somewhere, someone said hello.");
});

emtr.on("greet", () => {
  console.log("A greeting occurred!");
});

emtr.on("jump", () => {
  console.log("Someone jumped!");
});

console.log(emtr);
emtr.emit("greet");
emtr.emit("jump");
