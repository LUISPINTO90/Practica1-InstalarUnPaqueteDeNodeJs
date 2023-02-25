## Practica 08 - Servidor HTTP básico

En la práctica se muestra básicamente como crear un servidor web usando el framework Express de Node.js.

Instalándose en el proyecto de esta forma:
```
npm install express
```

Primero, se importa el módulo **"express"**. Luego, se crea una instancia de la aplicación Express mediante la función **"express()"**. Se define una ruta con el método HTTP **"GET"** y la ruta raíz (**"/"**) como la respuesta a enviar al cliente. Finalmente, se especifica que la aplicación debe escuchar en el puerto 3000 mediante el método **"listen()"**.

```js
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
```
El código crea un servidor web que responde con un mensaje "Hello World" cuando se accede a la ruta raíz del sitio web. Express es un framework web popular para Node.js que simplifica el proceso de creación de servidores web y manejo de rutas y peticiones HTTP.