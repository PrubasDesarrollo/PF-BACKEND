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
  rating: {
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
});

module.exports = mongoose.model("posts", postScheme);
