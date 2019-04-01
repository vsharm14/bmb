var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const socialUser = require('./socialUser.model.js');
var request = require('request');


/*
 |--------------------------------------------------------------------------
 | Connection To Mongo DB
 |--------------------------------------------------------------------------
 */

mongoose.connect("mongodb://localhost:27017/bus", { useNewUrlParser: true }).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

/*
 |--------------------------------------------------------------------------
 | Get User Information Based On Social ID 
 |--------------------------------------------------------------------------
 */
router.get('/userBySocialId/:socialId', (req, res) => {
  console.log("quring data1");
  console.log("id is " + req.params.socialId);
  socialUser.find({ socialId: req.params.socialId })
    .then(users => {
      if (users.length > 0) {
        console.log("valus is not null");
        console.log("length is " + users.length);
        res.json(users);
      }
      else {
        res.status(500).send({
          message: err.message || "Issues In Getting User."
        });
      }
    })
    .catch(err => {
      console.log("inside the error one");
      res.status(500).send({
        message: err.message || "Issues In Getting User."
      });
    });
});

/*
 |--------------------------------------------------------------------------
 | Persist Social Media User Data If First Time Doing Booking
 |--------------------------------------------------------------------------
 */
router.post('/createSocialUser', (req, res) => {
  console.log("saving data data");
  var myData = new socialUser({
    socialId: req.body.socialId,
    email: req.body.email
  });

  myData.save()
    .then(item => {
      res.json("User Added to database");
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

module.exports = router;