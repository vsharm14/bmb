'use strict';

var City = require('../model/citymodel');
var ObjectId = require('mongoose').Types.ObjectId;

var currentID = 0;
var _cloneCity = function(city) {
  var newCity = Object();
  if (city) {
    newCity.id = city._id;
    newCity.name = city.name;
    newCity.description = city.description;
  }
  return newCity;
};

var CityApi = {
  getAllCitys: function(callback) {
    console.log('getting all cities... ');
    City.find({}, function(err, cities) {
      if (err) callback(err, null);
      else {
        if (cities) {
          currentID = cities.length;
          var newCityArr = Array();
          cities.forEach(city => {
            newCityArr.push(_cloneCity(city));
          });
          callback(null, newCityArr);
        }
      }
    });
  },
  getCityById: function(id, callback) {
    console.log('gettting city by ID... ' + id);
    City.findOne({ _id: new ObjectId(id) }, function(err, city) {
      if (err) callback(err, null);
      else {
        var newCity = _cloneCity(city);
        callback(null, newCity);
      }
    });
  },
  updateCityById: function(id, city, callback) {
    console.log('updating city by ID... ');
    City.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          name: city.name,
          description: city.description
        }
      },
      { new: true },
      function(err, city) {
        if (err) callback(err);
        else {
          callback(null);
        }
      }
    );
  },
  saveCity: function(city, callback) {
    console.log('creating new city... ' + JSON.stringify(city));
    var newCity = new City();
    newCity.name = city.name;
    newCity.description = city.description;
    newCity.save(function(err, city) {
      if (err) {
        console.log('Error occurred...' + JSON.stringify(err));
        callback(err, null);
      } else {
        console.log('City saved: ' + city);
        var newCity = _cloneCity(city);
        callback(null, newCity);
      }
    });
  },
  deleteCityById: function(id, callback) {
    console.log('deleting product by ID... ');
    City.findOneAndRemove({ _id: id }, function(err, city) {
      if (err) callback(err);
      else {
        callback(null);
      }
    });
  }
};

module.exports = CityApi;
