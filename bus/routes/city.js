var CityApi = require('../data/CityApi');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  CityApi.getAllCitys(function(err, items) {
    res.json(items);
  });
});

router.post('/', function(req, res) {
  var city = {};
  city.name = req.body.name;
  city.description = req.body.description;
  CityApi.saveCity(city, function(err, city) {
    res.json(city);
  });
});

router.get('/:id', function(req, res) {
  CityApi.getCityById(req.params.id, function(err, city) {
    res.json(city);
  });
});

router.put('/:id', function(req, res) {
  var updatedCity = {};
  updatedCity.name = req.body.name;
  updatedCity.description = req.body.description;
  CityApi.updateCityById(req.params.id, updatedCity, function(err) {
    updatedCity.id = req.params.id;
    res.json(updatedCity);
  });
});

router.delete('/:id', function(req, res) {
  CityApi.deleteCityById(req.params.id, function(err) {
    res.json(req.params.id);
  });
});

module.exports = router;
