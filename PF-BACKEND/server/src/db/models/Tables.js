const mongoose = require("mongoose");

const TablesScheme = new mongoose.Schema(
  {
    diners: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      autopopulate: true,
    },

    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts",
        autopopulate: true,
      },
    ],

    capacity: {
      type: Number,
    },
  },
  {
    versionKey: false,
  }
);

CursosScheme.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Tables", TablesScheme);
