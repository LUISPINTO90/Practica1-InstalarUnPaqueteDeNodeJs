## Practica 07 - Emisor de eventos Node JS

La práctica demuestra la creación de objetos que pueden emitir y escuchar eventos personalizados. Es decir, los objetos de emisor de eventos pueden actuar como una especie de comunicación entre diferentes partes de una aplicación que se ejecutan en diferentes momentos.

El archivo **app.js** contiene el emisor de eventos que se crea mediante la clase **"Emitter"** importada del módulo "events" de Node, Se importa también el objeto config desde el archivo config.js que contiene un objeto con las constantes **"GREET"** y **"JUMP"** utilizadas como nombres de los eventos en el emisor.

Se agregan tres manejadores de eventos en el emisor a través del método **"on()"** del emisor **"emtr"**, dos para el evento GREET y uno para el evento JUMP. Cada manejador de eventos es una función anónima que imprime un mensaje en la consola.

Luego se imprime en la consola el objeto emtr que representa al emisor de eventos. Finalmente, se emiten dos eventos, **"GREET"** y **"JUMP"**, mediante el método **"emit()"** del emisor, lo que hace que se ejecuten los manejadores de eventos correspondientes y se impriman los mensajes en la consola.

```js
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
```

El archivo **config.js** simplemente exporta un objeto con las constantes utilizadas como nombres de eventos en el emisor de eventos. Esto permite que los nombres de eventos se definan en un lugar centralizado y se puedan utilizar en diferentes archivos sin tener que escribirlos manualmente cada vez.

```js
module.exports = {
  events: {
    GREET: "greet",
    JUMP: "jump",
  },
};

```