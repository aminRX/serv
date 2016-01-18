// config/initializers/database.js
var mongoose = require('mongoose');
var logger = require('winston');
module.exports = function(cb) {
  logger.info('[MONGODB] Initializing MongoDB');
  mongoose.connect('mongodb://127.0.0.1:27017');
  var dbMongo = mongoose.connection;
  dbMongo.on('error', console.error.bind(console, 'connection error:'));
  dbMongo.once('open', function() {
    logger.info('[MONGODB] connected');
  });
  cb(null, dbMongo);
};
