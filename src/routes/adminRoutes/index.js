const { Router } = require("express");
const verifyToken = require('../../utils/jwt')
const getHandlerAdmin = require('./handlers/getHandlerAdmin')
const putHandlerAdmin = require('./handlers/putHandlerAdmin')

const api = Router();

api.get("/", verifyToken, getHandlerAdmin);

api.put("/:id", verifyToken, putHandlerAdmin);


module.exports = api;