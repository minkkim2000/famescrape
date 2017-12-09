<<<<<<< HEAD
var db = require("../models");

module.exports = function(app) {
    // Search for Specific celeb (or all celebs) then provides JSON
    app.get("/api/:celebs?", function(req, res) {
        // Then display the JSON for ONLY that celeb.
        if db.Actor.findOne({
            where: {
                name: req.params.name
            }
        }).then(function(dbActor) {
            return res.json(dbActor);
        });

        // Otherwise...
        else {
            app.use(function (err, req) {
              console.error(err.stack)
              res.status(500).send("Please search new actor/actress")
            })
        }
    });

    // POST route for saving a new todo
    app.post("/api/celebs", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.Actor.create({
            name: req.body.name,
            valid: req.body.valid
        }).then(function(dbActor) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbActor);
        });
    });

    // PUT route for updating celebs. We can get the updated todo data from req.body
    app.put("/api/celebs", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.Actor.update({
            name: req.body.name,
            valid: req.body.valid
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbActor) {
            res.json(dbActor);
        });
    });
=======

var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the celebs
  app.get("/api/celebs", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Actor.findAll({}).then(function(dbActor) {
      // We have access to the celebs as an argument inside of the callback function
      res.json(dbActor);
    });
  });

  // POST route for saving a new todo
  app.post("/api/celebs", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Actor.create({
      name: req.body.name,
      valid: req.body.valid
    }).then(function(dbActor) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbActor);
    });
  });

  // DELETE route for deleting celebs. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/celebs/:name", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Actor.destroy({
      where: {
        name: req.params.name
      }
    }).then(function(dbActor) {
      res.json(dbActor);
    });

  });

  // PUT route for updating celebs. We can get the updated todo data from req.body
  app.put("/api/celebs", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Actor.update({
      name: req.body.name,
      valid: req.body.valid
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbActor) {
      res.json(dbActor);
    });
  });
>>>>>>> 75af3c1563c3f8664b6432bc3c1d09ef9aa03172

};