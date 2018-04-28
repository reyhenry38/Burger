// Dependencies
var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var db = require("../models");


//Routing
// Creates all our routes below
// Grabs all burgers from the burgers database
router.get("/", function(req, res) {
    db.burger.findAll({})
        .then(function(data) {
            var hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject);
        });
});

//Posts a burger to db
router.post("/", function(req, res) {
    db.burger.create({ burger_name: req.body.burger_name })
        .then(function(data) {
            res.redirect("/#scroll-spot");
        });
});

////Put = Updates a burger to db
router.put("/:id", function(req, res) {
    var condtion = req.params.id;
    db.burger.update({
            devoured: true
        }, {
            where: {
                id: condtion
            }
        })
        .then(function() {
            res.redirect("/#scroll-spot");
        });
});



module.exports = router;
