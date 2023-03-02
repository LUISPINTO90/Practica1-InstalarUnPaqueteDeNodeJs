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
