const { Router } = require("express");
const handlerGetPosts = require("./postsHandlers/getHandler");
const handlerPostPosts = require("./postsHandlers/postHandlerPosts");
const handlerDeletePosts = require("./postsHandlers/deletePostsHandler");
const handlerPutPost = require("./postsHandlers/handlerPutPost");
const handlerGetIdPost = require("./postsHandlers/handlerGetIdPost");

const api = Router();

//* Trae todos los posteos de platos
api.get("/", handlerGetPosts);

api.get("/:id", handlerGetIdPost);

//*Crear un posteo
api.post("/", handlerPostPosts);

//*Eliminar un posteo
api.delete("/:id", handlerDeletePosts);

//*Actualizar un posteo
api.put("/:id", handlerPutPost );


module.exports = api;
