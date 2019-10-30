const mongoose = require('mongoose');


const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [false],
  },
  surname: {
    type: String,
    required: [false],
  },
  mail: {
    type: String,
    index: {
      unique: true,
    },
    required: [true, 'Debes introducir un correo'],
  },
  password: {
    type: String,
    required: [true, 'Debes introducir una contraseña'],
  },
  phone: {
    type: String,
    minlength: 9,
    maxlength: 9,
    required: [false],
  },
  date: {
    type: { Date, default: Date.now() },
  },
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
