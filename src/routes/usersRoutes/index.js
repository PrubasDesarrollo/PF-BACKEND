const { Router } = require("express");
const handlerGetUsers = require('./usersHandlers/handlerGetUsers')
const handlerPostUser = require('./usersHandlers/handlerPostUser')
const handlerDeleteUser = require('./usersHandlers/handlerDeleteUser')
const handlerPutData = require('./usersHandlers/handlerPutData')
const handlerGetUser = require('./usersHandlers/handlerGetUser')
const handlerPutToken = require('./usersHandlers/handlerPutToken')
// const handlerGetTransactions = require("./usersHandlers/handlerGetTransactions")
const verifyToken = require('../../utils/jwt');

const api = Router();



api.get("/", handlerGetUsers);

api.get("/:id", handlerGetUser)

api.post("/", handlerPostUser);

api.delete("/:id",verifyToken, handlerDeleteUser);

api.put("/:id", verifyToken, handlerPutData);

api.get("/login/:email", handlerPutToken);

// api.get("transactions/:id", handlerGetTransactions);




module.exports = api;
