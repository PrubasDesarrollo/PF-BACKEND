const mongoose = require("mongoose");

const usersScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    isAdmin:{
      type: Boolean,
      default: false,
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
    created:{
      type: Boolean,
      default: false
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
    isActive:{
      type: Boolean,
      default: true
  }
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("users", usersScheme);
