var path = require("path");
var db = require("./models/famescrape");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.post("/", function(req, res){
    console.log(req.body.username);
    console.log(req.body.fullname);
    console.log(req.body.age);
    console.log(req.body.gender);
    console.log(req.body.email);
    console.log(req.body.password);

    const db = require(".../user_db.js");

    dbquery('INSERT INTO users')
    res.render('index')
  });

  module.exports = app;

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });


  app.get("/ratings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ratings.html"));
  });


  app.get("/analytics", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/analytics.html"));
  });

};