const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  tipoSangre: {
    type: String,
    required: true,
  },
  nss: {
    type: String,
    required: true,
  },
});

const Person = mongoose.model("Persons", personSchema);

module.exports = Person;
