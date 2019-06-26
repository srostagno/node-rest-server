//===================
// VERIFICAR TOKEN
//===================

const jwt = require("jsonwebtoken");

let tokenAuth = (req, res, next) => {
  let token = req.get("token");

  jwt.verify(token, process.env.SEED_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err
      });
    }

    req.usuario = decoded.usuario;
    next();
  });
};

//===================
// VERIFICAR ADMIN ROLE
//===================

let verifyAdminRole = (req, res, next) => {
  let usuario = req.usuario;

  if (usuario.role === "ADMIN_ROLE") {
    next();
  } else {
    return res.json({
      ok: false,
      message: "No puede crear usuario. Sólo administradores."
    });
  }
};

module.exports = {
  tokenAuth,
  verifyAdminRole
};
