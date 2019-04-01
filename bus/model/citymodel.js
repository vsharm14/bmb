var db = require('../data/db');
var mongoose = require('mongoose');
var citySchema = new mongoose.Schema({
  name: String,
  description: String
});

var City = db.model('city', citySchema);

module.exports = City;
