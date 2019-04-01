var express = require('express');
path = require('path');
var http = require('http');
var cors = require('cors')
var swig = require('swig');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var user = require('./bus/user');
var socialUser = require('./bus/socialUser');
// var bus = require('./bus/bus');
var booking = require('./bus/booking');
var index = require('./bus/routes/index');
var users = require('./bus/routes/users');
var city = require('./bus/routes/city');
var bus = require('./bus/routes/bus');
var app =  express();
var passport = require('passport');
var session = require('express-session');

var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
// app.set('views', __dirname + '/views');
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var originsWhitelist = [
  'http://localhost:4200',
  'http://127.0.0.1:4200'      //this is my front-end url for development 
];

var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(session({ secret: 'keyboard cat', key: 'sid', cookie: { secure: true }}));
app.use(session({ secret: 'blah', name: 'id' }))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',user);
app.use('/user',user);
app.use('/socialUser',socialUser);
app.use('/bus',bus);
app.use('/booking',booking);
app.use('/', index);
app.use('/users', users);
// 2. --UPDATES--
app.use('/city', city);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send(err.message);
  });

  module.exports = app;