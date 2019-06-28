require("./config/config");

const express = require("express");
const mongoose = require("mongoose");
const { urlDB } = require("./config/config");
const path = require("path");

const app = express();

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// habilitar carpeta public.
app.use(express.static(path.resolve(__dirname, "../public")));

app.use(require("./routes/index"));

mongoose.connect(
  process.env.NODE_ENV,
  { useNewUrlParser: true, useCreateIndex: true },
  (err, res) => {
    if (err) throw err;
    console.log("Conectado a Mongo");
    console.log(process.env.NODE_ENV);
  }
);

app.listen(process.env.PORT, () => {
  console.log("Escuchando en el puerto 3000");
});
