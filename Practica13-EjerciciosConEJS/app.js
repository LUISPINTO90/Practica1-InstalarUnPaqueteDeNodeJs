const express = require("express");
const app = express();

let port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use("/", (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/person/:id", (req, res) => {
  res.render("person", { NUM: req.params.id });
});

let data = [
  { id: 1, nombre: "Hugo", apellido: "Estrada Ramirez", edad: 19 },
  { id: 2, nombre: "Estela", apellido: "Perez Suarez", edad: 18 },
  { id: 3, nombre: "Sabrina", apellido: "Contreras Morales", edad: 17 },
];

app.get("/personas", (req, res) => {
  res.render("personas", { data });
});

app.listen(port);
