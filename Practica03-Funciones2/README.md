## Practica 03 - Funciones 2

La primera función llamada **"greet"** simplemente imprime "Hello!" en la consola.

```js
const greet = () => {
  console.log("Hello!");
};
```

La segunda función llamada **"logGreeting"** toma un parámetro que se espera que sea una función, y luego ejecuta esa función. Se llama a esta función dos veces, una vez con la función "greet" definida anteriormente como argumento, y otra vez con una nueva función creada "on the fly" que también imprime "Hello from a function created on the fly!".

```js
const logGreeting = (miParametro) => miParametro();

logGreeting(greet);

// Función creada on the fly
logGreeting(() => {
  console.log("Hello from a function created on the fly!");
});
```

La tercera función llamada **"logGreeting1"** toma dos parámetros, una cadena de caracteres que se espera que sea un nombre, y otra cadena de caracteres que se espera que sea un color. La función simplemente imprime una oración que combina estas dos cadenas.

```js
// Interpolación de strings clásica
const logGreeting1 = (miNombre, miColor) => {
  console.log(
    "Hola " + miNombre + " buenos dias! Tu color favorito es " + miColor
  );
};

logGreeting1("Carlos", "azul");
```

A continuación, se muestra cómo se puede hacer lo mismo utilizando una técnica de **interpolación de cadenas de caracteres**. Se crea una cadena de caracteres larga que combina varias cadenas y valores de variables utilizando una combinación de texto y símbolos de interpolación.

Por último, se muestran dos formas diferentes de hacer lo mismo utilizando una técnica de plantillas de cadena de caracteres. En ambos casos, se utiliza el símbolo de interpolación de **${}** para insertar valores de variables en una cadena de caracteres, lo que hace que el código sea más legible y fácil de entender.

```js
// Interpolación con template strings
let color = "rojo";
let talla = "M";
let modelo = "Clasico";

console.log(
  "Juan tiene una playera talla " +
    talla +
    " de color " +
    color +
    " y modelo " +
    modelo
);

console.log(
  `Juan tiene una playera talla ${talla} de color ${color} y modelo ${modelo}`
);
```
