var db = require("../models");

module.exports = function(app) {
    // Search for Specific celeb (or all celebs) then provides JSON
    app.get("/api/:name?", function(req, res) {
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
            db.Actor.create({
            name: req.body.name,
            valid: req.body.valid
        }).then(function(dbActor) {
            // We have access to the new todo as an argument inside of the callback function
            return res.json(dbActor);
        });
        }
    });

   // POST route for saving a new todo
    app.post("/api/name", function(req, res) {
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
    app.put("/api/name", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.Actor.update({
            name: req.body.name,
            valid: req.body.valid
        }, {
            where: {
                name: req.body.name
            }
        }).then(function(dbActor) {
            res.json(dbActor);
        });
    });
};