//=======================
// PUERTO
//=======================

process.env.PORT = process.env.PORT || 3000;

//=======================
// ENTORNO
//=======================

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//=======================
// VENCIMIENTO TOKEN
// 60 SEGUNDOS 60 MINUTOS 24 HORAS 30 DIAS
//=======================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//=======================
// SEED TOKEN
//=======================

process.env.SEED_TOKEN = process.env.SEED_TOKEN || "seed-dev";

//=======================
// BASE DE DATOS
//=======================

let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/cafe";
} else {
  urlDB = process.env.MONGO_URI;
}

process.env.NODE_ENV = urlDB;
