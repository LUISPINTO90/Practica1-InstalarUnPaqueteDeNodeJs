const greet = () => {
  console.log("Hello!");
};

const logGreeting = (miParametro) => miParametro();

logGreeting(greet);

// Función creada on the fly
logGreeting(() => {
  console.log("Hello from a function created on the fly!");
});

// Interpolación de strings clásica
const logGreeting1 = (miNombre, miColor) => {
  console.log(
    "Hola " + miNombre + " buenos dias! Tu color favorito es " + miColor
  );
};

logGreeting1("Carlos", "azul");

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
