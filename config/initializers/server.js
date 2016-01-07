// config/initializers/server.js

var express = require('express');
var path = require('path');
// Local dependecies
var config = require('nconf');

// create the express app
// configure middlewares
var bodyParser = require('body-parser');
var morgan = require('morgan');
var logger = require('winston');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log("hola mundo");
    console.log(data);
  });
});
var start =  function(cb) {
  'use strict';
  // Configure express


  app.use(morgan('common'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json({type: '*/*'}));

  logger.info('[SERVER] Initializing routes');
  require('../../app/routes/index')(app);

  app.use(express.static(path.join(__dirname, 'public')));

  // Error handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: (app.get('env') === 'development' ? err : {})
    });
    next(err);
  });
  server.listen(config.get('NODE_PORT'));
  logger.info('[SERVER] Listening on port ' + config.get('NODE_PORT'));

  if (cb) {
    return cb();
  }
};

module.exports = start;
