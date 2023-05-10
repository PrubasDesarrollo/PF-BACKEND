const { Router } = require("express");
const handlerGetUsers = require('./usersHandlers/handlerGetUsers')
const handlerPostUser = require('./usersHandlers/handlerPostUser')
const handlerDeleteUser = require('./usersHandlers/handlerDeleteUser')
const handlerPutData = require('./usersHandlers/handlerPutData')

const api = Router();

api.get("/", handlerGetUsers);

api.post("/", handlerPostUser);

api.delete("/:id", handlerDeleteUser);

api.put("/:info", handlerPutData);

module.exports = api;
