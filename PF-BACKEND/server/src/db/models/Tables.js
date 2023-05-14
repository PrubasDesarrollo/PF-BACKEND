const mongoose = require("mongoose");

const tablesScheme = new mongoose.Schema(
  {
    diners: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    capacity: {
      type: Number,
    },
    // * p
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("tables", tablesScheme);
