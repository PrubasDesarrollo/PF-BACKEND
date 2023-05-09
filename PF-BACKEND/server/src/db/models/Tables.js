const mongoose = require("mongoose");

const tablesScheme = new mongoose.Schema(
  {
    capacity: {
      type: Number,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("tables", tablesScheme);
