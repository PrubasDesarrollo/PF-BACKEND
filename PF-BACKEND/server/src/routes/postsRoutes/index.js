const { Router } = require("express");
const handlerGetPosts = require("./postsHandlers/getHandler")

const api = Router();

//* Trae todos los posteos de platos
api.get("/", handlerGetPosts);

//*Crear un posteo
//? api.post("/", );
//*Eliminar un posteo
//? api.delete("/", );
//*Actualizar un posteo
//? api.put("/", );


module.exports = api;
