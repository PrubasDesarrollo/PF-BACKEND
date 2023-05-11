const mongoose = require("mongoose");
const DB_UIL = "mongodb://mongo:dz5O7hHCPUsqeqXGQwPN@containers-us-west-141.railway.app:7456";
const createSeeds = require("./seeds/index");

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