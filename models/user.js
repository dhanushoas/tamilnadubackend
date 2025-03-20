const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  gmailId: { type: String, unique: true },
  dob: Date,
  password: String,
  registrationTime: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
