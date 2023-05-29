const mongoose = require("mongoose");

const ordersScheme = new mongoose.Schema(
  {
    idClient: {
      type: String,
      required: true,
    },
    products: {
      type: [
        {
          product: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("orders", ordersScheme);
