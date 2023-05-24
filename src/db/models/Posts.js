const mongoose = require("mongoose");

const postScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tags: {
    type: Array,
  },
  ingredients: {
    type: String,
  },
  original: {
    type: Boolean,
  },
  cost: {
    type: Number,
  },
  valoraciones: {
    type: Array,
  },
  authorUser: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  authorRest: {
    type: mongoose.Types.ObjectId,
    ref: "restaurants",
  },
  isActive:{
    type: Boolean,
    default: true
}
});

module.exports = mongoose.model("posts", postScheme);
