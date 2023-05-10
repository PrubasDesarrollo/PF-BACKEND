const { Router } = require("express");
const handlerGetUsers = require('./usersHandlers/handlerGetUsers')
const handlerPostUser = require('./usersHandlers/handlerPostUser')
const handlerDeleteUser = require('./usersHandlers/handlerDeleteUser')
const handlerPutData = require('./usersHandlers/handlerPutData')
const handlerGetUser = require('./usersHandlers/handlerGetUser')

const api = Router();

api.get("/", handlerGetUsers);

api.get("/:id", handlerGetUser)

api.post("/", handlerPostUser);

api.delete("/:id", handlerDeleteUser);

api.put("/:id", handlerPutData);

module.exports = api;
