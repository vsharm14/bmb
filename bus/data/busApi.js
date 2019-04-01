'use strict';

var Bus = require('../model/busmodel');
var ObjectId = require('mongoose').Types.ObjectId;

var currentID = 0;
var _cloneBus = function(bus) {
  var newBus = Object();
  if (bus) {
    newBus.id = bus._id;
    newBus.route = bus.route;
    newBus.description = bus.description;
    newBus.fromCity = bus.fromCity;
    newBus.toCity = bus.toCity;
    newBus.totalSeats = bus.totalSeats;
  }
  return newBus;
};

var BusApi = {
  getAllBuss: function(callback) {
    console.log('getting all cities... ');
    Bus.find({}, function(err, cities) {
      if (err) callback(err, null);
      else {
        if (cities) {
          var newBusArr = Array();
          cities.forEach(bus => {
            newBusArr.push(_cloneBus(bus));
          });
          callback(null, newBusArr);
        }
      }
    });
  },
  getBusById: function(id, callback) {
    console.log('gettting bus by ID... ' + id);
    Bus.findOne({ _id: new ObjectId(id) }, function(err, bus) {
      if (err) callback(err, null);
      else {
        var newBus = _cloneBus(bus);
        callback(null, newBus);
      }
    });
  },
  updateBusById: function(id, bus, callback) {
    console.log('updating bus by ID... ');
    Bus.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          route: bus.route,
          description: bus.description,
          fromCity: bus.fromCity,
          toCity: bus.toCity,
          totalSeats: bus.totalSeats
        }
      },
      { new: true },
      function(err, bus) {
        if (err) {
          console.log('Error occurred...' + JSON.stringify(err));
          callback(err);
        } else {
          callback(null);
        }
      }
    );
  },
  saveBus: function(bus, callback) {
    console.log('creating new bus... ' + JSON.stringify(bus));
    var newBus = new Bus();
    newBus.route = bus.route;
    newBus.description = bus.description;
    newBus.fromCity = bus.fromCity;
    newBus.toCity = bus.toCity;
    newBus.totalSeats = bus.totalSeats;
    newBus.save(function(err, bus) {
      if (err) {
        console.log('Error occurred...' + JSON.stringify(err));
        callback(err, null);
      } else {
        var newBus = _cloneBus(bus);
        callback(null, newBus);
      }
    });
  },
  deleteBusById: function(id, callback) {
    console.log('deleting product by ID... ');
    Bus.findOneAndRemove({ _id: id }, function(err, bus) {
      if (err) callback(err);
      else {
        callback(null);
      }
    });
  }
};

module.exports = BusApi;
