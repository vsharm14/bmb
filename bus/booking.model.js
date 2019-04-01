var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema({
  _id:Number,  
  route: Number,
  busid:String,
  seats:Number,
  email: String,
  bdate:Date
});

module.exports = mongoose.model("Booking", bookingSchema);