// Requiring our models
const db = require("../models")
var Celeb = require("../models/celebs.js");

// Routes
// =============================================================
module.exports = function(app) {

    // Search for Specific celeb (or all celebs) then provides JSON
    app.get("/api/:celebs?", function(req, res) {
        // Then display the JSON for ONLY that celeb.
        Celeb.findOne({
            where: {
                routeName: req.params.celebs
            }
        }).then(function(result) {
            return res.json(result);
        });
    });

    // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
        db.Post.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(result) {
                res.json(result);
            });
    });

    // If a user sends data to add a new celebrities...
    app.post("/api/new", function(req, res) {
        var celeb = req.body;
        var routeName = celeb.name.replace(/\s+/g, "").toLowerCase();

        // Then add the celeb to the database using sequelize
        Celeb.create({
            routeName: routeName,
            name: celeb.name,
        });

    });


    // GET route for getting all of the posts
    app.get("/api/posts/", function(req, res) {
        db.Post.findAll({})
            .then(function(result) {
                res.json(result);
            });
    });

    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
        console.log(req.body);
        db.Post.create({
                like: req.body.like,
                dislike: req.body.dislike,
                whoThat: req.body.whoThat
            })
            .then(function(result) {
                res.json(result);
            });
    });

    // PUT route for updating posts
    app.put("/api/posts", function(req, res) {
        db.Post.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(function(result) {
                res.json(result);
            });
    });
};