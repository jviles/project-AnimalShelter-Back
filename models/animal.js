const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const AnimalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  type: {
    type: String,
    required: true
  },
  age: Number,
  size: String,
  color: String,
  sex: String,
  breed: String,
  microchip: Boolean,
  vaccinated: Boolean,
  healthcare: Boolean,
  energylevel: String,
  autonomy: String,
  sociable: String,
  hates: String,
  loves: String,
  goingoutysociability: String,
  alittleofmypast: String,
});

module.exports = mongoose.model('Animal', AnimalSchema);

