//************************
//DEPENDENCIES
//************************
var express = require("express");

var app = express();

const apiRoutes = require("./app/routing/apiRoutes")(app);
const htmlRoutes = require("./app/routing/htmlRoutes")(app);

var PORT = process.env.PORT || 8080;

//**************************
//EXPRESS APP - DATA PARSING
//**************************
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.json({ type: "application/vnd.api + json" }));
app.use(express.static("app/public"));

app.use("/", [apiRoutes, htmlRoutes]);

//************************
//APP LISTENER
//************************
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
