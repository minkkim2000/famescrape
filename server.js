var express = require("express");
var bodyParser = require("body-parser");
<<<<<<< HEAD

=======
var passport 			 = require("./config/passport");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
>>>>>>> 8f71e8c5d2bea52674abc4389773e4f7353440dc
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

require("./routes/api-routes.js")(app);

<<<<<<< HEAD
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
=======
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);
>>>>>>> 8f71e8c5d2bea52674abc4389773e4f7353440dc
