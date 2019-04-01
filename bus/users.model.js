var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  _id: Number,
  email: String,
  lastName: String,
  firstName:String,
  location:String,
  password:String,
  phoneNumber:String
});

module.exports = mongoose.model("User", userSchema);