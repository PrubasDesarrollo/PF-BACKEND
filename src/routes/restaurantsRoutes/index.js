const { Router } = require("express");
const handlerGetData = require("./restaurantsHandlers/getHandler");
const handlerPostData = require("./restaurantsHandlers/postHandler");
const handlerDeleteData = require("./restaurantsHandlers/deleteHandler");
const handlerPutData = require("./restaurantsHandlers/putHandler");
const handlerGetIdData = require("./restaurantsHandlers/getIdHandler");
const dashHandler = require('./restaurantsHandlers/dashHandler');
const handlerPutToken = require('./restaurantsHandlers/handlerPutToken')
const handlerGetTransactions = require("./restaurantsHandlers/handlerGetTransactions");
const handlerGetReservations = require("./restaurantsHandlers/handlerGetReservations");

const verifyToken = require('../../utils/jwt')


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

// * Ruta para ver ventas
api.get("transactions/:id", handlerGetTransactions);

api.get("reservations/:id", handlerGetReservations)


// * Rutas informacion dashboard restaurant

api.get("/dashboard/:id", verifyToken, dashHandler);

module.exports = api;
