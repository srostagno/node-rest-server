//=======================
// PUERTO
//=======================

process.env.PORT = process.env.PORT || 3000;

//=======================
// ENTORNO
//=======================

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//=======================
// BASE DE DATOS
//=======================

let urlDB;
urlDB =
  "mongodb+srv://strider:AGs3qPgL7Iu1fJUZ@cluster0-a0t0t.mongodb.net/tester";

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/cafe";
} else {
  urlDB = "mongodb//strider: AGs3qPgL7Iu1fJUZ@cluster0-a0t0t.mongodb.net/test";
}

process.env.NODE_ENV = urlDB;
