const mongoose = require("mongoose");
require('dotenv').config();
const createSeeds = require("./seeds/index");
const { DB_UIL } = process.env;

module.exports = () => {
    const connect = () => {
        try {
            mongoose.connect(DB_UIL, {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            createSeeds(),
            console.log("Coneccion con la BD realizada")
            )
        } catch (error) {
            console.log("Error al conectar con la BD");
        }
    }

    connect();
}