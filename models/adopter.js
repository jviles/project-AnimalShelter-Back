const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const AdopterSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  phonenumber: {
    type: Number,
    required: true
  },

  shelterId: {
    type: Schema.Types.ObjectId,
    ref: 'shelter'
  }
});


module.exports = mongoose.model('Adopter', AdopterSchema);