const { Router } = require("express");
const handlerGetData = require("./restaurantsHandlers/getHandler")
const handlerPostData = require("./restaurantsHandlers/postHandler.js");
const handlerDeleteData = require("./restaurantsHandlers/deleteHandler");
const handlerPutData = require("./restaurantsHandlers/putHandler");
const handlerGetIdData = require("./restaurantsHandlers/getIdHandler");
const handlerPutToken = require('./restaurantsHandlers/handlerPutToken')
const verifyToken = require('../../utils/jwt')
const dashHandler = require('./restaurantsHandlers/dashHandler');
const api = Router();

// * Rutas GET
//? traer todos los restaurantes
api.get("/", handlerGetData);

api.get("/:id", handlerGetIdData);

// * Postear un restaurante

api.post("/", handlerPostData);

// * Eliminar un restaurante segun id

api.delete("/:id",verifyToken, handlerDeleteData);

// * Actualizar restaurante segun id

api.put("/:id",verifyToken, handlerPutData);

api.get("/login/:email", handlerPutToken)


// * Rutas informacion dashboard restaurant

api.get("/dashboard/:id", dashHandler);

module.exports = api;
