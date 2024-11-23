const configGoogle = {
  host: process.env.GOOGLE_HOST,
  port: process.env.GOOGLE_PORT,
  secure: true,
  auth: {
    user: process.env.GOOGLE_CORREO,
    pass: process.env.GOOGLE_CLAVE,
  },
};

module.exports = { configGoogle };