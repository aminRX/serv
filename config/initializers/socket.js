
var start = function (server, cb) {
  'use strict';
  var io = require('socket.io')(server);

  io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log('hola mundo');
      console.log(data);
    });
  });

  if (cb) {
    return cb();
  }

};
module.exports = start;
