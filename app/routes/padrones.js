module.exports = function(router, model){
  'use strict';
  router.route('/').
    get(function(req, res, next) {
      res.json({});
    });
};
