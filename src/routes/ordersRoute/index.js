const { Router } = require("express");
const handlerPostOrders = require("./ordersHandlers/OrdersPostHandler");
const handlerGetOrders = require("./ordersHandlers/OrdersIdGetHandler");

const api = Router();

api.get("/", handlerGetOrders);
api.post("/", handlerPostOrders);

module.exports = api;
