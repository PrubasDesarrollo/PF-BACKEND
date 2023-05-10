const { Router } = require("express");
const handlerGetUsers = require('./usersHandlers/handlerGetUsers')
const handlerPostUser = require('./usersHandlers/handlerPostUser')
const handlerDeleteUser = require('./usersHandlers/handlerDeleteUser')
const handlerPutData = require('./usersHandlers/handlerPutData')
const handlerPostPosts = require('./usersHandlers/handlerPostPosts')

const api = Router();

api.get("/", handlerGetUsers);

api.post("/", handlerPostUser);

api.post("/:id", handlerPostPosts)

api.delete("/:id", handlerDeleteUser);

api.put("/:id", handlerPutData);

module.exports = api;
