const mongoose = require('mongoose');
require('mongoose-long')(mongoose); // adds Long type

const { Types } = mongoose;

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  phone: {
    type: Types.Long,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema, 'bancoKredaCollection');

