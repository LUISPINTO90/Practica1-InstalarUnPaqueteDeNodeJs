
## Practica 04 - Módulos

En esta práctica, se tiene un archivo llamado **"greet.js"** que contiene una función llamada **"greet"** que simplemente imprime "Hello from the module" en la consola. Esta función se exporta utilizando la propiedad "module.exports".

```js
const greet = () => console.log("Hello from the module");

module.exports = greet;

```

Luego, en el archivo **"app.js"**, se importa la función **"greet"** desde el archivo **"greet.js"** utilizando la función "require" de Node.js. La función **"greet"** se invoca y se imprime "Hello from the module" en la consola.

```js
let greet = require("./greet");

greet();
```

Además, en el archivo **"app.js"**, se define un objeto llamado "persona" que tiene varias propiedades y métodos. El objeto "persona" tiene una propiedad "nombre" y una propiedad "apellido" que se imprimen en la consola utilizando la función "console.log".

El objeto **"persona"** también tiene un método **"getName"** que devuelve el nombre completo de la persona utilizando las propiedades "nombre" y "apellido". Este método se invoca y el resultado se imprime en la consola utilizando la función "console.log".

Finalmente, el objeto "persona" tiene una propiedad "domicilio" que es un objeto anidado con varias propiedades. El objeto "persona" también tiene un método **"getDomicilio"** que devuelve una cadena formateada con la información de domicilio de la persona. Este método se invoca y el resultado se imprime en la consola utilizando la función "console.log".

```js
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
```