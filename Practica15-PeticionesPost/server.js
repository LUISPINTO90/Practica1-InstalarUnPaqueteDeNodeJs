const express = require("express");
const app = express();

let port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/", (req, res, next) => {
  console.log("Request Url: " + req.url);
  next();
});

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
    <main>
      <h1>Hello World!</h1>
    </main>
  </body>
</html>
  `);
});

app.get("/student", (req, res) => {
  res.render("student");
});

app.post("/addStudent", (req, res) => {
  res.render("displayData", {
    nombre: req.body.nombre,
    edad: req.body.edad,
    nss: req.body.nss,
    tipoSangre: req.body.tipoSangre,
  });
});

app.listen(port);
