const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({
  name: { type: String},
});

module.exports = mongoose.model('Name', nameSchema);