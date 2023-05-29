const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    images: {
      type: [String],
    },
    type_customer: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    valoraciones: [
      {
        type: Schema.Types.Mixed,
      },
    ],
    created: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
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
    transactions:[{
      type: Schema.Types.Mixed,
  }],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("users", usersScheme);
