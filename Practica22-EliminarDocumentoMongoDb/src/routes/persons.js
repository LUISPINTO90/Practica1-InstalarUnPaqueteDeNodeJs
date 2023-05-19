const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Importar el modelo de personas
const Person = require("../models/persons");

// Ruta GET para obtener todas las personas
router.get("/gente", async (req, res) => {
  try {
    const persons = await Person.find({}); // Utiliza el modelo "Person" para buscar en la colección "persons"
    res.render("persons", { Persons: persons });
  } catch (error) {
    res.json({ message: error });
  }
});

// Ruta GET para mostrar formulario de agregar persona
router.get("/addPerson", (req, res) => {
  res.render("addPerson");
});

// Ruta POST para agregar una nueva persona a la base de datos
router.post("/addPerson", async (req, res) => {
  const { nombre, edad, tipoSangre, nss } = req.body;
  const newPerson = new Person({
    nombre,
    edad,
    tipoSangre,
    nss,
  });

  try {
    await newPerson.save(); // Guarda la nueva persona en la colección "persons"
    res.redirect("/gente");
  } catch (error) {
    res.json({ message: error });
  }
});

// Ruta GET para eliminar una persona por su ID
router.get("/deletePerson/:id", async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.redirect("/gente");
  } catch (error) {
    res.json({ message: error });
  }
});

// Ruta GET para encontrar una persona por su ID y mostrar el formulario de actualización
router.get("/findById/:id", (req, res) => {
  Person.findById(req.params.id)
    .then((myPerson) => {
      res.render("updatePerson", { myPerson });
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

// Ruta POST para actualizar una persona en la base de datos
router.post("/updatePerson", async (req, res) => {
  const { objId, nombre, edad, tipoSangre, nss } = req.body;

  try {
    await Person.findByIdAndUpdate(objId, {
      nombre,
      edad,
      tipoSangre,
      nss,
    });
    res.redirect("/gente");
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
