var db = require('../data/db');
var mongoose = require('mongoose');
var busSchema = new mongoose.Schema({
  route: String,
  description: String,
  fromCity: String,
  toCity: String,
  totalSeats: Number
});

var Bus = db.model('bus', busSchema);

module.exports = Bus;
