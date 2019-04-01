var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Bus = require('./bus.model.js');
const User = require('./users.model.js')


mongoose.connect("mongodb://localhost:27017/bus", { useNewUrlParser: true }).then(() => {
}).catch(err => {
  process.exit();
});

router.get('/buses', function (req, res) {
  Bus.find()
    .then(buses => {
      buses.forEach(element => {
      });
      res.json(buses);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes."
      });
    });
});

router.post('/createBus', (req, res) => {
  var tempId;
  User.find().sort({ _id: -1 }).limit(1)
    .then(issue => {
      if (issue.length < 1) {
        tempId = 1;
      }
      else {
        var obj = JSON.stringify(issue);
        var stringify = JSON.parse(obj);

        tempId = stringify[0]['_id'] + 1;
      }
      var myData = new Bus({
        _id: tempId,
        route: 123,
        description: "mybus",
        fromCity: "pune",
        toCity: "banalore",
        totalSeats: 50
      });

      myData.save()
        .then(item => {
          res.json("User Added to database");
        })
        .catch(err => {
          res.status(400).send("Unable to save to database");
        });
    })
    .catch(err => {
      tempId = 0;
    });

  tempId = tempId + 1
});

router.put('/edit/:_id', function (req, res) {
  User.findById(+req.params._id, function (err, user) {
    if (err) throw err;
    user.description = req.body.description,
      user.severity = req.body.severity,
      user.status = req.body.status,
      user.cdate = req.body.cdate,
      user.rdate = req.body.rdate

    user.save(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });
});
module.exports = router;