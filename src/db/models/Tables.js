const mongoose = require("mongoose");

const tablesScheme = new mongoose.Schema(
  {
    diners: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    capacity: {
      type: Number,
      default: 1
    },
    dateBooking:{
      type: Date,
      required: true
    },
    price:{
      type: Number,
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: 'restaurants',
    }
    // * p
  },
  {
    versionKey: false,
    timestamps:{
      createdAt: "created_at",
      updatedAt: false
    }
  }
);

module.exports = mongoose.model("tables", tablesScheme);
