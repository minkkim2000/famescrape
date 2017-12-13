var path = require('path');



exports.index = function(req, res) {
  console.log("here")
res.sendFile(path.join(__dirname, "../public/index.html"))
};

exports.login = function(req, res) {
  console.log("here")
res.sendFile(path.join(__dirname, "../public/login.html"))
};
