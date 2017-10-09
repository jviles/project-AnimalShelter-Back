const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ShelterSchema = new Schema({
  sheltersname: {
    type: String,
    required: [true, 'name is required']
  },
  direction: {
    type: String,
    required: [true, 'direction is required']
  },
  number: Number,
  zipcode: Number,
  user: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
    }
  ]
});

module.exports = mongoose.model('Shelter', ShelterSchema);