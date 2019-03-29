require("./config/config");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.json("Hello World");
});

app.get("/usuario/:id", function(req, res) {
  let id = req.params.id;

  res.json(id);
});

app.post("/usuario", function(req, res) {
  let body = req.body;

  if (body.name === undefined) {
    res.status(400).json({
      ok: false,
      mensaje: "Es necesario un nombre"
    });
  } else {
    res.json({
      body
    });
  }
});

app.put("/usuario", function(req, res) {
  res.json("put usuario");
});

app.delete("/usuario", function(req, res) {
  res.json("delete usuario");
});

app.listen(process.env.PORT, () => {
  console.log("Escuchando en el puerto 3000");
});
