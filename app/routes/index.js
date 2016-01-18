var changeCase = require('change-case');
var express = require('express');
var routes = require('require-dir')();

module.exports = function(app, dbMongo) {
  'use strict';
  console.log(routes);
  // Initialize all routes
  Object.keys(routes).forEach(function(routeName) {
    console.log(routeName);

    var router = express.Router();
    // You can add some middleware here
    // router.use(someMiddleware);

    // Initialize the route to add its functionality to router
    require('./' + routeName)(router, dbMongo);

    // Add router to the sppeficied route name in the app
    app.use('/' + changeCase.paramCase(routeName), router);
  });
};
