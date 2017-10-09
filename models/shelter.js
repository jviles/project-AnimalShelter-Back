const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ShelterSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  direction: {
    type: String,
    required: [true, 'direction is required']
  },
  number: String,
  zipcode: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = mongoose.model('Shelter', ShelterSchema);