var mongoose = require('mongoose');

var socialUserSchema = new mongoose.Schema({
  socialId:String,
  email: String,
});

module.exports = mongoose.model("socialUser", socialUserSchema);