const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  image: String,
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);
