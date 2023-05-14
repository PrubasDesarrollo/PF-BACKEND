const tablePostHandler = require("./tablesHandlers/tablePostHandler");
const tablesDeleteHandler = require("./tablesHandlers/tablesDeleteHandler");
const tablesPutHandler = require("./tablesHandlers/tablesPutHandler");
const tablesGetHandler = require("./tablesHandlers/tablesGetHandler");
const tablesIdGetHandler = require("./tablesHandlers/tablesIdGetHandler");
const { Router } = require("express");

const api = Router();

//*ruta para crear una mesa
api.post("/", tablePostHandler)

//*ruta para eliminar una mesa
api.delete("/:id", tablesDeleteHandler)

//*ruta para modificar una mesa
api.put("/:id", tablesPutHandler)

//*ruta para traer los posteos
api.get("/", tablesGetHandler)

//*ruta para traer un posteo por id
api.get("/:id", tablesIdGetHandler)

module.exports = api;
