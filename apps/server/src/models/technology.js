const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  svgPath: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Technology', technologySchema);