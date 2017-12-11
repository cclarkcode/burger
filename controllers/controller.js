var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log('Got here');
  burger.selectAll(function(data) {
    var hbObject = {
      burgers: data
    };
    // res.render("index", hbObject);
    console.log(hbObject);
    res.render("index",hbObject);
  });
});

router.post("/api/burger", function(req, res) {

burger.create(req.body.name, function(data) {
    // Send back the ID of the new burger
    res.json({ id: data.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {

  burger.update(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;