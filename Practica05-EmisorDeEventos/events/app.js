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
