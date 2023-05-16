const { Router } = require("express");
const handlerGetData = require("./restaurantsHandlers/getHandler")
const handlerPostData = require("./restaurantsHandlers/postHandler.js");
const handlerDeleteData = require("./restaurantsHandlers/deleteHandler");
const handlerPutData = require("./restaurantsHandlers/putHandler");
const handlerGetIdData = require("./restaurantsHandlers/getIdHandler");
const api = Router();

// * Rutas GET
//? traer todos los restaurantes
api.get("/", handlerGetData);

api.get("/:id", handlerGetIdData);

// * Postear un restaurante

api.post("/", handlerPostData);

// * Eliminar un restaurante segun id

api.delete("/:id", handlerDeleteData);

// * Actualizar restaurante segun id

api.put("/:id", handlerPutData);

module.exports = api;
