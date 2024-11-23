const {modelEnviarCorreoGoogle} = require("../models/model.google.js");

let controllerEnviarCorreoGoogle = async (req, res) => {
  if (!req.body.destinatarios) {
    res.status(401).json({
      estado: false,
      mensaje: "Los destinatarios son requeridos",
      respuesta: null,
    });
  } else if (!req.body.asunto) {
    res.status(401).json({
      estado: false,
      mensaje: "El asunto es requerido",
      respuesta: null,
    });
  } else if (!req.body.texto && !req.body.html) {
    res.status(401).json({
      estado: false,
      mensaje:
        "El cuerpo del correo es requerido, puede ser en formato texto plano con el campo texto, o en formato HTML con el campo html",
      respuesta: null,
    });
  } else {
    try {
      const respuesta = await modelEnviarCorreoGoogle(req.body);
      if (respuesta) {
        res.status(200).json({
          estado: true,
          mensaje: "Envio exitoso",
          respuesta: respuesta.response,
        });
      } else {
        res.status(401).json({
          estado: false,
          mensaje: "Fallo el envio de correo",
          respuesta: respuesta,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(401).json({
        estado: false,
        mensaje: "Ocurrio un error enviado el correo",
        respuesta: null,
      });
    }
  }
};

module.exports = { controllerEnviarCorreoGoogle };
