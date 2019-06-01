//************************
//DEPENDENCIES
//************************
var express = require("express");

var app = express();

const apiRoutes = require("./routing/apiRoutes")(app);
const htmlRoutes = require("./routing/htmlRoutes")(app);

var PORT = process.env.PORT || 8080;

//**************************
//EXPRESS APP - DATA PARSING
//**************************
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//************************
//APP LISTENER
//************************
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
