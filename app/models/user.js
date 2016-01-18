// app/models/user.js
// INITILIAZE your model here
// var User =  new Model()

// module.exports = User;
var User = function(dbMongo) {
  this.dbMongo = dbMongo;
};

User.prototype.find = function() {
  return {a: 'amin'};
};


module.exports = new User();
