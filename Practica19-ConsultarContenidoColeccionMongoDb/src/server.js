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
