const mongoose = require("mongoose");
const DB_UIL = "mongodb://mongo:0rlihv0cPxexppVlGMdJ@containers-us-west-126.railway.app:7808";
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