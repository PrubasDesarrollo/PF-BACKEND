const { Router } = require("express");
const handlerGetPosts = require("./postsHandlers/getHandler");
const handlerPostPosts = require("./postsHandlers/postHandlerPosts");
const handlerDeletePosts = require("./postsHandlers/deletePostsHandler");
const handlerPutPost = require("./postsHandlers/handlerPutPost");

const api = Router();

//* Trae todos los posteos de platos
api.get("/", handlerGetPosts);

//*Crear un posteo
api.post("/", handlerPostPosts);

//*Eliminar un posteo
api.delete("/", handlerDeletePosts);

//*Actualizar un posteo
api.put("/", handlerPutPost );


module.exports = api;
