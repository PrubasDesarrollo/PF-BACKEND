const mongoose = require("mongoose");

const deliveryScheme = new mongoose.Schema(
{
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    c_country:{
        type: String,
        required: true
    },
    c_city:{
        type: String
    },
    c_address:{
        type: String,
        required: true
    },
    c_order: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: true
    }],
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurants",
        required: true
    },
    to_recieve:{
        type: Date,
    },
    cost:{
        type: Number,
        required: true
    },
    observations:{
        type: String,
    },
    status:{
        type: String,
    }
},
{
    versionKey: false,
    timestamps:{
      createdAt: "created_at",
      updatedAt: false
    }
  })

module.exports = mongoose.model("delivery", deliveryScheme);