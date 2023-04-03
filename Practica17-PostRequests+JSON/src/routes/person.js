const express = require("express");

const router = express.Router();

router.get("/student", (req, res) => {
  res.render("student");
});

router.post("/addStudent", (req, res) => {
  res.render("displayData", {
    nombre: req.body.nombre,
    edad: req.body.edad,
    nss: req.body.nss,
    tipoSangre: req.body.tipoSangre,
  });
});

router.post("/personJSON", express.json({ type: "*/*" }), (req, res) => {
  console.log(`Nombre: ${req.body.nombre} Apellido: ${req.body.apellido}`);
});

router.get("/testJSON", (req, res) => {
  res.render("testJSON");
});

module.exports = router;
