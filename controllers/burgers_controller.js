// =============================================================================
// DEPENDENCIES
// =============================================================================
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


// =============================================================================
// ROUTERS
// =============================================================================
// Create all our routes and set up logic within those routes where required

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
            "burger_name", "devoured"
        ], [
            req.body.burger_name, req.body.devoured
        ],
        function(result) {
            // Send back the ID of the new quote
            // res.json({ id: result.insertId});
        });
    res.redirect('/');
});


router.put("/burgers/update/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;