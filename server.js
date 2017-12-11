// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var override = require('method-override');

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Assign static directory to be served
app.use(express.static("public"));

// Set Handlebars as view engine.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var routes = require('./controllers/controller.js');
app.use('/', routes);

// Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});