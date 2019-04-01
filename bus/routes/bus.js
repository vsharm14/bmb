var BusApi = require('../data/BusApi');
var express = require('express');
var router = express.Router();

router.get('/buses', function(req, res) {
  BusApi.getAllBuss(function(err, items) {
    res.json(items);
  });
});

router.post('/', function(req, res) {
  var bus = {};
  bus.route = req.body.route;
  bus.description = req.body.description;
  bus.fromCity = req.body.fromCity;
  bus.toCity = req.body.toCity;
  bus.totalSeats = req.body.totalSeats;
  BusApi.saveBus(bus, function(err, bus) {
    res.json(bus);
  });
});

router.get('/:id', function(req, res) {
  BusApi.getBusById(req.params.id, function(err, bus) {
    res.json(bus);
  });
});

router.put('/:id', function(req, res) {
  var updatedBus = {};
  updatedBus.route = req.body.route;
  updatedBus.description = req.body.description;
  updatedBus.fromCity = req.body.fromCity;
  updatedBus.toCity = req.body.toCity;
  updatedBus.totalSeats = req.body.totalSeats;
  BusApi.updateBusById(req.params.id, updatedBus, function(err) {
    updatedBus.id = req.params.id;
    res.json(updatedBus);
  });
});

router.delete('/:id', function(req, res) {
  BusApi.deleteBusById(req.params.id, function(err) {
    res.json(req.params.id);
  });
});

module.exports = router;
