const { Router } = require("express");
const uploadImage = require('../../services/firebase')
const multer = require("multer");
const handlerGetUsers = require('./usersHandlers/handlerGetUsers')
const handlerPostUser = require('./usersHandlers/handlerPostUser')
const handlerDeleteUser = require('./usersHandlers/handlerDeleteUser')
const handlerPutData = require('./usersHandlers/handlerPutData')
const handlerGetUser = require('./usersHandlers/handlerGetUser')

const api = Router();

const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
});

api.get("/", handlerGetUsers);

api.get("/:id", handlerGetUser)

api.post("/", Multer.single("image"), uploadImage, handlerPostUser);

api.delete("/:id", handlerDeleteUser);

api.put("/:id", handlerPutData);

module.exports = api;
