const express = require("express");
const {
  controllerEnviarCorreoGoogle,
} = require(`../controllers/controller.google`);

const google = express.Router();

//Rutas
google.get("/", (req, res) => {
  res.status(200).json({
    estado: true,
    mensaje: "Servicio para envio de correos",
    respuesta: true,
  });
});
google.post("/enviar-correo/google", controllerEnviarCorreoGoogle);

module.exports = { google };
