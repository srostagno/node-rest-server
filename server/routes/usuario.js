const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const _ = require("underscore");
const Usuario = require("../models/usuario");

app.get("/", function(req, res) {
  res.json("Hello World");
});

app.get("/usuarios/:id", function(req, res) {
  let id = req.params.id;
  let body = req.body;

  Usuario.find({ _id: id }).exec((err, usuario) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }
    res.json({
      ok: true,
      usuario
    });
  });
});

app.get("/usuario", function(req, res) {
  let desde = req.query.desde || 0;
  desde = Number(desde);
  let limite = req.query.limite || 5;
  limite = Number(limite);
  Usuario.find({})
    .skip(desde)
    .limit(limite)
    .exec((err, usuarios) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }
      /* Usuario.count({ nombre: "Silvio" }, (err, conteo) => {
        res.json({
          ok: true,
          cuantos: conteo,
          usuarios
        });
      }); */
    });
});

app.post("/usuario", function(req, res) {
  let body = req.body;

  let usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: body.password,
    role: body.role
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      usuarioDB
    });
  });
});

app.put("/usuario/:id", function(req, res) {
  let id = req.params.id;
  let body = _.pick(req.body, ["nombre", "email", "role", "img", "estado"]);

  Usuario.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (err, usuarioDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }
      res.json({
        ok: true,
        usuario: usuarioDB
      });
    }
  );
});

app.delete("/usuario/:id", function(req, res) {
  let id = req.params.id;

  let cambiarEstado = {
    estado: false
  };

  Usuario.findByIdAndUpdate(
    id,
    cambiarEstado,
    { new: true },
    (err, usuarioDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err
        });
      }
      res.json({
        ok: true,
        usuario: usuarioDB
      });
    }
  );
});

module.exports = app;
