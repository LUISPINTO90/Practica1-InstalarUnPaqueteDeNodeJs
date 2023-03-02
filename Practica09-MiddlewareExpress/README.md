## Practica 09 - Middleware Express

Investiga los siguientes conceptos y contesta las siguientes preguntas:

- ¿Qué es un middleware?
  Un middleware es una función que se utiliza en el proceso de gestión de solicitudes (request) y respuestas (response) en una aplicación web. Actúa como una capa intermedia entre el servidor y la aplicación, permitiendo realizar diversas tareas y modificaciones en las solicitudes y respuestas que se reciben y envían.

- ¿Cuál es el significado del término “MEAN stack” ?
  MEAN stack es un término que se utiliza para describir un conjunto de tecnologías utilizadas para desarrollar aplicaciones web. Está compuesto por las siguientes tecnologías: MongoDB (base de datos NoSQL), Express (framework web para Node.js), Angular (framework para el desarrollo de aplicaciones web front-end) y Node.js (entorno de tiempo de ejecución de JavaScript del lado del servidor).

- ¿Cuáles son las características/funcionalidades que Express ofrece como middleware?
  Express ofrece varias funcionalidades como middleware, tales como: el manejo de rutas, el manejo de errores, el análisis de datos enviados en solicitudes, el manejo de sesiones, entre otras.

- ¿Qué es una ruta en Express?
  En Express, una ruta es una combinación de un método HTTP (como GET, POST, DELETE, etc.) y una URL (Uniform Resource Locator) que se utiliza para identificar un recurso en una aplicación web.

- ¿Qué es un “route handler” en Express y para qué se utiliza?
  Un "route handler" en Express es una función que se ejecuta cuando se accede a una ruta específica en la aplicación web. Se utiliza para manejar las solicitudes y generar respuestas para los clientes.

- ¿Cuáles son los 2 parámetros necesarios para crear una ruta para el método GET con Express, ejemplo: app.get()?
  Los dos parámetros necesarios para crear una ruta para el método GET con Express son: el primer parámetro es la URL de la ruta, y el segundo parámetro es el manejador de ruta (route handler).

- ¿Qué es lo que hace la instrucción res.send?
  La instrucción res.send se utiliza para enviar una respuesta de texto/html como resultado de una solicitud HTTP. Es decir, cuando un cliente realiza una solicitud a una ruta específica en una aplicación web, la respuesta generada por el servidor se envía al cliente mediante esta instrucción.

- ¿Cuál es el motivo por el que Express es tan popular?

  - Es fácil de aprender y utilizar.
  - Proporciona una gran cantidad de funcionalidades útiles para la creación de aplicaciones web.
  - Es compatible con múltiples plataformas y sistemas operativos.
  - Es escalable y puede manejar grandes volúmenes de tráfico.
  - Tiene una gran comunidad de desarrolladores que contribuyen activamente a su desarrollo y mejora continua.

### Práctica

La práctica es un ejemplo de una aplicación web básica usando el framework de Node.js llamado Express. La aplicación define dos rutas accesibles mediante el método HTTP GET: "/" y "/pruebas".

Cuando el usuario visita la raíz de la aplicación ("http://localhost:3000/"), la aplicación responde con una página HTML que contiene un enlace a la ruta "/pruebas" que al hacer clic, lleva al usuario a la ruta "/pruebas" y se carga otra página HTML que contiene un enlace a la ruta principal "/". Al hacer clic en este enlace, el usuario es redirigido de vuelta a la página principal.

Cada página HTML contiene un título, una sección de encabezado con un texto "Hola Mundo", y un enlace para navegar entre las páginas.

La aplicación utiliza el método app.listen() para escuchar solicitudes en el puerto 3000 de la computadora. Cuando se inicia la aplicación, la misma queda esperando las solicitudes entrantes en el puerto 3000, por lo que cuando un usuario accede a la aplicación desde un navegador, la aplicación responderá con una de las dos páginas HTML mencionadas.

```js
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hola Mundo</title>
    </head>
    <body>
      <a href="/pruebas">
        <h1>Hola Mundo!</h1>
      </a>
    </body>
  </html>
  `);
});

app.get("/pruebas", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pruebas</title>
    </head>
    <body>
      <a href="/">
        <h1>Hola Mundo desde pruebas!</h1>
      </a>
    </body>
  </html>
    `);
});

app.listen(3000);
```
