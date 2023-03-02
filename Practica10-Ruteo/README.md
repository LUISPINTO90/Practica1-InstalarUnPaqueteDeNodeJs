## Practica 10 - Ruteo

Esta práctica utiliza la biblioteca Express de Node.js para crear un servidor web. Se define una aplicación Express y se asocia a la variable 'app'. Luego se declara la variable 'port' que establece el puerto en el que se ejecutará la aplicación, utilizando el valor del puerto de entorno si existe, de lo contrario se establece el puerto 3000.

```js
const express = require("express");
const app = express();

let port = process.env.PORT || 3000;
```

Se define una ruta para la raíz del sitio ('/') que devuelve una respuesta HTTP con una página HTML estática que muestra el mensaje "Hello World!".

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
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
  `);
});
```

Se define otra ruta para '/api' que devuelve una respuesta HTTP con un objeto JSON que contiene el nombre y apellido "John Doe".

```js
app.get("/api", (req, res) => {
  res.json({ firstName: "John", lastName: "Doe" });
});
```

Finalmente, se define una ruta dinámica utilizando un parámetro llamado 'id', que se puede acceder utilizando 'req.params.id'. Esta ruta devuelve una respuesta HTTP con una página HTML que muestra el valor del parámetro 'id' en el título de la página.

```js
app.get("/person/:id", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>Person: ${req.params.id}</h1>
    </body>
  </html>`);
});
```

El servidor se inicia con la instrucción 'app.listen(port)', lo que hace que la aplicación escuche en el puerto especificado y responda a las solicitudes entrantes.

```js
app.listen(port);
```
