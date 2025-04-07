const mongoose = require('mongoose');

const CensusSchema = new mongoose.Schema({
  address: String,
  city: String,
  state: String,
  zip: String,
  numberOfPeople: Number,
  year: Number,
  censusTaker: String,
});

module.exports = mongoose.model('Census', CensusSchema);
