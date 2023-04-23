## Practica 19 - Consultar el contenido de una colección de MongoDB

Esta práctica consiste en consultar el contenido de una colección de MongoDB utilizando Mongoose y Express.

El archivo **server.js** inicia una aplicación Express y configura el motor de vistas a EJS. Luego, se establece una conexión con la base de datos MongoDB Atlas utilizando la URL de conexión especificada en la variable de entorno **process.env.MONGODB_URI**.

```js
const express = require("express");
const mongoose = require("mongoose");
const personsRoutes = require("./routes/persons");
require("dotenv").config();

mongoose.Promise = global.Promise;
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(personsRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log(`Server running on port ${port}`));
```

El archivo **persons.js** define un esquema de Mongoose para la colección "User". Este esquema define los campos **name**, **age** y **email**.

```js
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
```

El archivo **persons.js** en la carpeta **routes** define una ruta para la consulta de los documentos de la colección "User". Cuando se accede a la ruta **/gente**, se realiza una consulta a la base de datos para obtener todos los documentos de la colección "User". Luego, los documentos se envían como respuesta en formato JSON utilizando el método **res.json()**.

```js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let Person = require("../models/persons");

router.get("/gente", async (req, res) => {
  const Persons = await Person.find({});
  res.json(Persons);
});

module.exports = router;
```

En resumen, al acceder a la ruta **/gente** en la aplicación, se retornará un JSON que contiene todos los documentos de la colección "User".
