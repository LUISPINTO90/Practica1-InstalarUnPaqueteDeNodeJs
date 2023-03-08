## Practica 12 - View Engines

En esta práctica View Engines se refiere a la capacidad de generar vistas dinámicas a partir de plantillas predefinidas y datos en tiempo de ejecución.

En esta práctica, el módulo de Express ejs se utiliza como motor de vistas para generar HTML dinámico. El motor de vistas EJS permite la incorporación de lógica de programación en las vistas HTML utilizando sintaxis de etiquetas especiales.

En el archivo **app.js** se establece el motor de vistas EJS como el motor de plantillas que se utilizará en la aplicación:

```js
app.set("view engine", "ejs");
```

Luego, se definen rutas de solicitud HTTP utilizando el método **app.get()** y las respuestas se envían a través del método **res.render()**.

El método **res.render()** utiliza el motor de vistas EJS para generar HTML dinámico a partir de la plantilla proporcionada y los datos pasados como segundo argumento.

Por ejemplo, en la ruta:

```js
app.get("/person/:id", (req, res) => { ... })
```

cuando el usuario accede a http://localhost:3000/person/John, la plantilla person.ejs se renderiza y se reemplaza la variable ID en la plantilla con el valor "John" que se pasó como parámetro en la ruta.
