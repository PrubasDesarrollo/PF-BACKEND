const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bannedScheme = new mongoose.Schema({
    user_banned:{
        type: Schema.Types.Mixed,
    }
},{
    versionKey: false,
    timestamps:{
      createdAt: "created_at",
      updatedAt: false
    }
})

module.exports = mongoose.model("banned", bannedScheme);