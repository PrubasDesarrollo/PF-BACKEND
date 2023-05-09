const { Router } = require("express");
const handlerGetData = require("./restaurantsHandlers/getHandler")
const handlerPostData = require("./restaurantsHandlers/postHandler.js");
const handlerDeleteData = require("./restaurantsHandlers/deleteHandler");
const handlerPutData = require("./restaurantsHandlers/putHandler");
const api = Router();

// * Traer datos de todos los restaurantes

api.get("/", handlerGetData);

// * Postear un restaurante

api.post("/", handlerPostData);

// * Eliminar un restaurante segun id

api.delete("/:id", handlerDeleteData);

// * Actualizar restaurante segun id

api.put("/:id", handlerPutData);

module.exports = api;
