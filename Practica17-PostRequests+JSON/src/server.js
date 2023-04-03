const express = require("express");
const path = require("path");

const app = express();

let personsRoute = require("./routes/person");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(personsRoute);

app.use("/assets", express.static(path.join("../public")));

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
