const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const AnimalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  type: String,
  age: Number,
  size: String,
  color: String,
  sex: String,
  breed: String,
  shelterId: {
    type: Schema.Types.ObjectId,
    ref: 'shelter'
  }
});

module.exports = mongoose.model('Animal', AnimalSchema);

