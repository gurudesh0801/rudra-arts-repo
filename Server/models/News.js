const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  headline: String,
  details: String,
  image: String,
},{ timestamps: true });

module.exports = mongoose.model('News', newsSchema);
