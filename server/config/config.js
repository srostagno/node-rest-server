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

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/cafe";
} else {
  urlDB =
    "mongodb+srv://strider:<password>@cluster0-a0t0t.mongodb.net/tester?retryWrites=true&w=majority";
}

process.env.NODE_ENV = urlDB;
