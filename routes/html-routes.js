var path = require("path");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });


  app.get("/ratings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ratings.html"));
  });


  app.get("/user_settings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/settings.html"));
  });

};