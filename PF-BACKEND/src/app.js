const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index");

const server = express();


server.use(cors());
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));

server.use('/', routes);

module.exports = server;