## Practica 02 - Funciones

La función **"greet"** imprime "Hello World!". La línea "greet();" al final del código invoca la función, lo que hace que se ejecute y se muestre el mensaje en la consola.

```js
const greet = () => {
  console.log("Hello World!");
};
greet();
```

La función **"logGreeting"** llama al argumento "fn" dentro de su cuerpo, lo que significa que al invocar "logGreeting", podemos especificar qué función se debe ejecutar.

En este caso, la línea "logGreeting(greet);" invoca la función "logGreeting" y pasa como argumento la función "greet". Esto significa que cuando se ejecuta "logGreeting", se ejecutará también la función "greet", que imprimirá el mensaje "Hello World!" en la consola.

```js
const logGreeting = (fn) => {
  fn();
};
logGreeting(greet);
```

La función **"greetMe"** imprime "Hello from the function expression!". La línea "greetMe();" al final del código invoca la función, lo que hace que se ejecute y se muestre el mensaje en la consola.

```js
const greetMe = () => {
  console.log("Hello from the function expression!");
};
greetMe();
```
