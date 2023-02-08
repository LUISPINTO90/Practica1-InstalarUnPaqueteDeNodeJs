// Aquí hacemos una inyección de dependencias para poder usar la librería.
const { toCelsius, toFahrenheit } = require("celsius");

/**
 * Aquí hacemos console.log para ver el resultado de la función toCelsius(),
 * llamando a la función directamente.
 */
console.log(toCelsius(100)); // 38
console.log(toCelsius(100, 3)); // 37.778
console.log(toCelsius("105.981 degrees F", 5)); // 41.10056

/**
 * Aquí hacemos console.log para ver el resultado de la función toFahrenheit(),
 * llamando a la función directamente.
 */
console.log(toFahrenheit(36)); // 97
console.log(toFahrenheit(36.68, 3)); // 98.024
console.log(toFahrenheit("-40.691 degrees C", 5)); // -41.24380

// Otra forma de usar la librería es usando una constante.
// Aquí hacemos una constante para poder usar todos los métodos de la librería.
const celsius = require("celsius");

/**
 * Aquí hacemos console.log para ver el resultado
 * de la función toCelsius() y toFahrenheit(),
 * pero ahora usando la constante celsius y llamando a los métodos.
 */
console.log(celsius.toCelsius(100)); // 38
console.log(celsius.toFahrenheit(36)); // 97
