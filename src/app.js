// const { configEnv } = require('./configs/config-env/config.env');
// configEnv();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: ".env" });

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.json());
app.set("port", process.env.PORT);

const { google } = require("./routes/route.google");
app.use("/api/v1", google);

app.listen(app.get("port"), () => {
  console.log(`NODE_ENV=${process.env.NODE_ENV}`);
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
