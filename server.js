require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var db = require("./models");
var connection = require("./config");

var authenticateController = require("./controllers/authenticate-controller");
var registerController = require("./controllers/register-controller");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extendended: true
  })
);
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "..views/index.handlebars");
});
app.get("../views/index.handlebars", function(req, res) {
  res.sendFile(__dirname + "/" + "../views/index.handlebars");
});
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

/* route to handle login and registration */
app.post("/api/register", registerController.register);
app.post("/api/authenticate", authenticateController.authenticate);

console.log(authenticateController);
app.post("/controllers/register-controller", registerController.register);
app.post(
  "/controllers/authenticate-controller",
  authenticateController.authenticate
);

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
