let greet = require("./greet");

greet();

let persona = {
  nombre: "Carlos",
  apellido: "Ulibarri",
  getName: function () {
    return `${this.nombre} ${this.apellido}`;
  },
  domicilio: {
    calle: "Madero",
    numero: "144",
    colonia: "Centro",
    cp: "28000",
    municipio: "Colima",
  },
  getDomicilio: function () {
    return `${this.domicilio.calle} #${this.domicilio.numero} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`;
  },
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.getName());
console.log(persona.getDomicilio());
