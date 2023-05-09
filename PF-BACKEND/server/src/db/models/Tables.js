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
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("tables", tablesScheme);
