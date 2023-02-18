
## Practica 05 - Emisor de eventos

Esta práctica consta de dos partes:

### Parte 1
La primera parte está en el archivo **"events/app.js"**. Este archivo define un objeto llamado **"obj"** que tiene varias propiedades y métodos.

Las propiedades del objeto "obj" son "nombre", "edad" y "apellido". Los métodos son "keypress" y "mouseOver".


```js
let obj = {
  nombre: "Carlos",
  edad: 44,
  apellido: "Ulibarri",
  keypress: function () {
    return "Se ha presionado una tecla";
  },
  mouseOver: function () {
    return "El puntero del mouse esta arriba";
  },
};
```

Después de definir el objeto "obj", el código imprime varias de sus propiedades y métodos en la consola, usando diferentes formas de acceder a ellos.

Luego, el código crea un array llamado **"myArray"** y agrega varios elementos al array, incluyendo el objeto "obj" y una función anónima.

```js
console.log(obj.nombre);
console.log(obj["nombre"]);

let myKey = "nombre";
console.log(obj[myKey]);

myKey = "keypress";
console.log(obj[myKey]());

myKey = "mouseOver";
console.log(obj[myKey]());

let myArray = [];
myArray.push(4);
myArray.push("Una cadena");
myArray.push(obj);
myArray.push(function () {
  return "Hola desde el array";
});

console.log(myArray);
```

Después, el código crea otro array llamado **"funcArray"** y agrega tres funciones anónimas al array. Finalmente, el código ejecuta cada función en el array "funcArray" y muestra su resultado en la consola.

```js
let funcArray = [];
funcArray.push(() => {
  return "Funcion 1";
});
funcArray.push(() => {
  return "Funcion 2";
});
funcArray.push(() => {
  return "Funcion 3";
});

funcArray.forEach((item) => {
  console.log(item());
});
```

### Parte 2

La segunda parte del código está en los archivos **"emisor/emitter.js"** y **"emisor/app.js"**.

**Emitter es un objeto que permite emitir y escuchar eventos** en una aplicación de JavaScript. Los eventos son señales que indican que algo ha sucedido en la aplicación y que pueden ser escuchados por funciones que se ejecutarán en respuesta a ese evento.

El archivo **"emisor/emitter.js"** define un constructor de objetos llamado **"Emitter"**. Este constructor tiene dos métodos, "on" y "emit".

El método **"on"** se utiliza para agregar un "escucha" a un evento. Recibe dos parámetros: el tipo de evento y una función que se ejecutará cuando el evento ocurra.

El método **"emit"** se utiliza para emitir un evento. Recibe un parámetro que indica el tipo de evento a emitir. Cuando se emite un evento, todas las funciones que se hayan agregado como "escuchas" para ese evento se ejecutarán.

```js
function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(function (listener) {
      listener();
    });
  }
};

module.exports = Emitter;
```

El archivo **"emisor/app.js"** importa el constructor "Emitter" del archivo "emisor/emitter.js" y crea una instancia de él llamada **"emtr"**. Luego, agrega varias funciones como "escuchas" para dos eventos diferentes: "greet" y "jump". Después de agregar los "escuchas", el código emite los dos eventos "greet" y "jump".

Cada vez que se emite un evento, se ejecutan todas las funciones que se hayan agregado como "escuchas" para ese evento. El resultado de la ejecución de cada función se muestra en la consola.

```js
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
```