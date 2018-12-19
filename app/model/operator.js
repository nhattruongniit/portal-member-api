const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OperatorSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    bcrypt: true,
  }
});

module.exports = mongoose.model('operator', OperatorSchema);