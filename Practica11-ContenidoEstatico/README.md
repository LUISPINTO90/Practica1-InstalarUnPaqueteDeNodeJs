## Practica 11 - Contenido estático

En esta práctica se observa código que utiliza el framework Express.js para crear un servidor web que sirve contenido estático y dinámico.

Primero, se importa el módulo "express" y se crea una instancia de la aplicación:
```js
const express = require("express");
const app = express();
```

Se establece un puerto en el que se ejecutará el servidor, tomando el valor de la variable de entorno "PORT" si está definida, o en su defecto el puerto 3000:
```js
let port = process.env.PORT || 3000;
```

Se define un middleware que servirá los archivos estáticos que se encuentren en la carpeta "public" cuando se haga una petición a la ruta "/assets":
```js
app.use("/assets", express.static(__dirname + "/public"));
```

Se define un middleware que imprimirá en la consola la URL de cada petición que reciba el servidor:
```js
app.use("/", (req, res, next) => {
  console.log("Request Url: " + req.url);
  next();
});
```

Se define una ruta que sirve una página HTML que incluye un archivo CSS y un título "Hello World!" cuando se hace una petición GET a la ruta principal "/":
```js
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="/assets/style.css" />
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
  `);
});
```

Se define una ruta que devuelve un objeto JSON con los valores de "firstName" y "lastName" cuando se hace una petición GET a la ruta "/api":
```js
app.get("/api", (req, res) => {
  res.json({ firstName: "John", lastName: "Doe" });
});
```

Se define una ruta que muestra un título con el valor de "id" que se pase como parámetro en la ruta cuando se hace una petición GET a la ruta "/person/:id":
```js
app.get("/person/:id", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="/assets/style.css" />
      </head>
      <body>
        <h1>Person: ${req.params.id}</h1>
      </body>
    </html>
  `);
});
```

Se inicia el servidor en el puerto definido:
```js
app.listen(port);
```