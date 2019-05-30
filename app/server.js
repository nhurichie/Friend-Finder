//************************
//DEPENDENCIES
//************************
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

//**************************
//EXPRESS APP - DATA PARSING
//**************************
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public"));

// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);









//************************
//APP LISTENER
//************************
app.listen(PORT, function () {

  console.log("Server listening on: http://localhost:" + PORT);
});
