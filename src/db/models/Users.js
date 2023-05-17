const mongoose = require("mongoose");

const usersScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    token:{
      type: String,
    },
    password:{
      type: String,
      required: true
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
    type_customer: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    valoraciones: {
      type: Array,
    },
    rating: {
      type: Number,
    },
    posts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "posts",
    },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tables",
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("users", usersScheme);
