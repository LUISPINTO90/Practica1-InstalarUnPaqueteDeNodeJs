function Greetr() {
  this.greeting = "Hello from function constructor greet3";

  this.greet = function () {
    console.log(this.greeting);
  };
}

module.exports = new Greetr();
