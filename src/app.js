const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../swagger/swagger.json"); // ruta al archivo de documentación Swagger
const server = express();
const multer = require('multer')
const uploadImage = require('./services/firebase');

server.use(cors());
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
});

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
server.use("/", Multer.single("image"), uploadImage, routes);

module.exports = server;
