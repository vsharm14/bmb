var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
//var jwt = require('jwt-simple');
const mongoose = require('mongoose');
const User = require('./users.model.js');
var crypto = require('crypto');
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
var passportLinkedIn = require('./auth/linkedin');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var config = require('./auth-config');
var request = require('request');
var qs = require('querystring');


/*
 |--------------------------------------------------------------------------
 | Login with LinkedIn
 |--------------------------------------------------------------------------
 */


mongoose.connect("mongodb://localhost:27017/bus", { useNewUrlParser: true }).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});



router.get('/auth/linkedin', function (req, res) {
  console.log("we wre inside body ");
  var accessTokenUrl = 'https://www.linkedin.com/uas/oauth2/accessToken';
  var peopleApiUrl = 'https://api.linkedin.com/v1/people/~:(id,first-name,last-name,email-address,picture-url)';
  var params = {
    code: req.query.code,
    //client_id: req.body.clientId,
    client_id: '81nv211t2onjlb',
    client_secret: config.LINKEDIN_SECRET,
    //redirect_uri: req.body.redirectUri,
    redirect_uri: 'http://127.0.0.1:3000/auth/linkedin',
    //redirect_uri:'http://127.0.0.1:4200/user',
    grant_type: 'authorization_code'
  };

  // Step 1. Exchange authorization code for access token.
  request.post(accessTokenUrl, { form: params, json: true }, function (err, response, body) {
    if (response.statusCode !== 200) {
      console.log("this is the after auth thing");
      return res.status(response.statusCode).send({ message: body.error_description });
    }
    var params = {
      oauth2_access_token: body.access_token,
      format: 'json'
    };

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: peopleApiUrl, qs: params, json: true }, function (err, response, profile) {
      var token = jwt.sign(profile, 'secret');
      res.redirect(`http://127.0.0.1:4200/user?token=` + token);
      //          res.json({ token: token });

      // // Step 3b. Create a new user account or return an existing one.
      // User.findOne({ email: profile.emailAddress }, function(err, existingUser) {
      // if (existingUser && existingUser.provider == "linkedin") {
      //     var token = createJWT(existingUser);
      //     res.send({ token: token }); 
      //   }
      //   else if (existingUser && existingUser.provider != "linkedin") {
      //     var user = {};
      //       user.provider_id = profile.id;
      //       user.provider = "linkedin";
      //       user.email = profile.emailAddress;
      //       user.picture = profile.pictureUrl;
      //       user.displayName = profile.firstName+' '+profile.lastName;
      //       User.findOneAndUpdate({email:existingUser.email},user, function(err) {
      //         var token = createJWT(existingUser);
      //         res.send({ token: token });
      //       });
      //   }
      //   else{
      //       var user = new User();
      //       user.provider_id = profile.id;
      //       user.provider = "linkedin";
      //       user.email = profile.emailAddress;
      //       user.picture = profile.pictureUrl;
      //       user.displayName = profile.firstName+' '+profile.lastName;
      //       user.save(function() {
      //         var token = createJWT(user);
      //         res.send({ token: token });
      //       });
      // }
      // });
    });
  });
});

// router.get('/socialLogin', function(req, res,next) {
//   console.log("inside the social login");
// //  res.sendFile((path.join(__dirname, 'index.html')));
// // res.set('Content-Type', 'text/html');
//  // res.render('index', { title: 'Express' });
// //  popupS.window({
// //   mode:'alert', 
// //   content :'hello'});
//   // res.render('create');
// res.redirect('auth/linkedin');

//   // const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
//   // console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
// })

// router.get('/auth/linkedin', passportLinkedIn.authenticate('linkedin'),function(req,res)
// {
//   console.log('this is next level');
//   res.redirect(req.url);
// });

// router.get('/auth/linkedin/callback',
// passportLinkedIn.authenticate('linkedin', { failureRedirect: '/socialLogin' }),
//   function(req, res) {
//     console.log("here we are");
//     // Successful authentication
//     res.json(req.user);
//   });

// router.get('/twitter/login', passport.authenticate('twitter'))

// router.get('/twitter/return', passport.authenticate('twitter', {
//     failureRedirect: '/'
// }), function(req, res) {
//     res.redirect('/')
// })

router.post('/loginUser', (req, res) => {
  console.log("backend login fucntion");
  let roleType;
  console.log("this is email" + req.body.username);
  User.find({ "email": req.body.username })
    .then(user => {
      var obj = JSON.stringify(user);
      var userData = JSON.parse(obj);

      console.log("email" + userData[0]['email']);
      if (userData[0]['email'] === 'admin@gmail.com') {
        roleType = 'admin';
      }
      else {
        roleType = 'user';
      }
      console.log("this is role type" + roleType);
      console.log("this is firstname" + userData[0]['firstName']);
      console.log("this is pwd" + user);
      if (userData[0]['email'] !== null) {
        console.log("inside frirt check");
        // if(userData[0]['password'] === req.body.password)
        if (bcrypt.compareSync(req.body.password, userData[0]['password'])) {

          console.log("inside secof   mnbvfbafjaffk");
          console.log("password" + user.password);
          console.log("server password is" + req.body.password);
          // Generate Token Here
          console.log("user is " + user.firstName);
          console.log("email is " + user.email);
          console.log("type is" + user.roleType);
          let token = jwt.sign({
            "username": userData[0]['firstName'],
            "email": userData[0]['email'],
            "role": roleType
          },
            'secret');
          return res.status(200).json(token);
        }
        else {
          res.status(501).json({ 'message': 'Password is Not Correct' });
        }
      }
      else {
        res.status(501).json({ message: "No user registered with this ID" });
      }
    })
    .catch(error => {
      return res.status(501).json({ message: "No user registered with this ID" });
    })
});

router.get('/userByMail/:email', (req, res) => {
  console.log("this is the mail" + req.params.email);
  User.find({ "email": req.params.email })
    .then(notes => {
      console.log("length is " + notes.length);
      if (notes.length == 0) {
        res.status(404).send({
          message: err.message || "Issues In Getting User."
        });
      }
      res.json(notes);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Issues In Getting User."
      });
    });
});

router.post('/createUser', (req, res) => {
  var tempId;
  var pwd;

  pwd = bcrypt.hashSync(req.body.password, 10);
  console.log("pwd is " + pwd);
  User.find().sort({ _id: -1 }).limit(1)
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

      var myData = new User({
        _id: tempId,
        email: req.body.email,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        location: req.body.location,
        password: pwd,
        phoneNumber: req.body.phoneNumber
      });

      myData.save()
        .then(item => {

          var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false, // use SSL
            port: 25, // port for secure SMTP
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
            subject: 'Welcome To Book My Bus',
            html: '<p>You are successfully registerd to Book My Bus</p>'
          };

          transporter.sendMail(mailOptions, function (err, info) {
            if (err)
              console.log(err)
            else {
              console.log(info);
              res.json("User Added to database");
            }
          });


          // res.json("User Added to database");
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