var mongoose = require('mongoose');

var busSchema = new mongoose.Schema({
  _id:Number,  
  route: Number,
  description: String,
  fromCity: String,
  toCity: String,
  totalSeats: Number
});

module.exports = mongoose.model("Bus", busSchema);
