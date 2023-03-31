const express = require("express");

const app = express();

let personsRoute = require("./routes/person");

app.set("view engine", "ejs");
app.use(personsRoute);

app.use("/assets", express.static(__dirname + "/public"));

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
