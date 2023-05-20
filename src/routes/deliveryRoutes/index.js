const deliveryPostHandler = require("./deliveryHandlers/deliveryPostHandler");
const deliveryPutHandler = require("./deliveryHandlers/deliveryPutHandler"); 
const deliveryDeleteHandler = require("./deliveryHandlers/deliveryDeleteHandler");
const deliveryGetHandler = require("./deliveryHandlers/deliveryGetHandler");

const { Router } = require("express");

const api = Router();

//* ruta para crear un pedido
api.post("/", deliveryPostHandler)

//* ruta para modificar info, o agregar más comida
api.put("/:id", deliveryPutHandler)

//*ruta para ver los pedidos de un restaurant
api.get("/", deliveryGetHandler)
//*ruta para ver las reservas de un usuario

//*ruta para eliminar una reserva
api.delete("/:id", deliveryDeleteHandler)

module.exports = api;