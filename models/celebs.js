// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Celeb" model that matches up with DB
var Celeb = sequelize.define("celeb", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the celeb (a string)
  name: Sequelize.STRING,
}, {
  timestamps: false
});

// Syncs with DB
Celeb.sync();

// Makes the Celeb Model available for other files (will also create a table)
module.exports = Celeb;
