var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../configure/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  // Load user page
  app.get("/user/:id", function(req, res) {
    res.render(path.join(__dirname, "../views/user.handlebars"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
