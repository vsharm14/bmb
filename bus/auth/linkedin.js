var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin');

// var User = require('../models/user');
//var config = require('../_config');
var init = require('./init');

passport.use(new LinkedInStrategy({
  consumerKey: '81nv211t2onjlb',
  consumerSecret: 'Pu2QF34MgZfh3LMr',
  callbackURL: 'http://127.0.0.1:3000/auth/linkedin/callback'
  },
  function(token, tokenSecret, profile, done) {

    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      someID: profile.id
    };

    var options = {
      upsert: true
    };
  }

));

// serialize user into the session
init();


module.exports = passport;