var express = require('express');
var dateFormat = require('dateformat');
var router = express.Router();
let date = require('date-and-time');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Booking = require('./booking.model.js');
var nodemailer = require('nodemailer');

mongoose.connect("mongodb://localhost:27017/bus", { useNewUrlParser: true }).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

router.get('/busStatus/:busid/:bdate', function (req, res) {
  console.log("inside the find buses");
  var d = new Date(req.params.bdate);
  console.log("after formatting " + date.format(d, 'YYYY-MM-DD'));
  console.log("busi d is" + date.parse(date.format(d, 'YYYY-MM-DD'), 'YYYY-MM-DD'));
  console.log("b date is " + d);
  console.log("b date is " + dateFormat(d, "yyyy-mm-dd"));
  Booking.find({ busid: req.params.busid, bdate: date.parse(date.format(d, 'YYYY-MM-DD'), 'YYYY-MM-DD') })
    .then(buses => {
      let seatsLeft = 0;
      buses.forEach(element => {
        console.log(element.seats);
        seatsLeft = seatsLeft + element.seats;
      })
      console.log("this is length of buses" + buses.length);
      console.log("total seats booked" + seatsLeft);
      res.json({ 'seats': seatsLeft });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes."
      });
    });
});

router.get('/userBookings/:email', function (req, res) {
  Booking.find({ email: req.params.email })
    .then(buses => {
      res.json(buses);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes."
      });
    });
});

router.post('/doBooking', (req, res) => {
  var tempId;
  Booking.find().sort({ _id: -1 }).limit(1)
    .then(issue => {
      console.log("length is " + issue.length);
      if (issue.length < 1) {
        console.log("tisis first time");
        tempId = 1;
      }
      else {
        console.log("iddue is " + JSON.stringify(issue));
        console.log("iddue is " + JSON.parse(JSON.stringify(issue))._id);
        var obj = JSON.stringify(issue);
        var stringify = JSON.parse(obj);
        console.log("is is " + stringify[0]['_id']);
        console.log("req.body.description" + JSON.stringify(req.body));
        tempId = stringify[0]['_id'] + 1;
        console.log("id is " + tempId);
        console.log("length is " + issue.length);
      }

      var d = new Date(req.body.bdate);
      var bdate = date.parse(date.format(d, 'YYYY-MM-DD'), 'YYYY-MM-DD');
      var myData = new Booking({
        _id: tempId,
        route: req.body.route,
        busid: req.body.busid,
        seats: req.body.seats,
        email: req.body.email,
        bdate: bdate
      });

      myData.save()
        .then(item => {
          var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
              user: 'test12345bmb@gmail.com',
              pass: 'test@12345'
            },
            tls: {
              rejectUnauthorized: false
            }
          });

          const mailOptions = {
            from: 'test12345bmb@gmail.com',
            to: req.body.email,
            subject: 'Booking Done Successfully',
            html: `<b>Hello User PFB the booking details: <br>
            <strong>Route:${req.body.route}</strong> <br>
            <strong>Booking Date:${req.body.bdate}</strong> <br> 
            <strong>Total Seats Booked:${req.body.seats}</strong></b></p>`
          };

          transporter.sendMail(mailOptions, function (err, info) {
            if (err)
              console.log(err)
            else {
              console.log(info);
              res.json("User Added to database");
            }
          });
        })
        .catch(err => {
          res.status(400).send("Unable to save to database");
        });
    })
    .catch(err => {
      tempId = 0;
    });

  tempId = tempId + 1
  console.log("temp is " + tempId);
});

module.exports = router;