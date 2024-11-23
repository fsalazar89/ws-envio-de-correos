const { configGoogle } = require("../configs/conexiones/config.google");
const nodemailer = require("nodemailer");

const modelEnviarCorreoGoogle = async (datos) => {
  try {
    let transporter = nodemailer.createTransport(configGoogle);
    let mailOptions = {
      from: `"${process.env.GOOGLE_ALIAS}" <${process.env.GOOGLE_CORREO}>`,
      to: datos.destinatarios,
      subject: datos.asunto,
      text: datos.texto,
      html: datos.html,
    };
    const correoEnviado = await transporter.sendMail(mailOptions);
    return correoEnviado;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { modelEnviarCorreoGoogle };
