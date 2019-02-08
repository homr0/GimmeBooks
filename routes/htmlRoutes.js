var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    var user = req.session;
    console.log(user);
    var hbsObject = {
      loggedIn: false
    };

    if (user.passport && user.passport.id) {
      hbsObject = {
        loggedIn: true
      };
    }
    // res.render(path.join(__dirname, "../views/index.handlebars"));
    res.render("index", hbsObject);
  });

  // Load user page
  app.get("/user/:id", function(req, res) {
    res.render(path.join(__dirname, "../views/user.handlebars"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the login page
  // app.get("/login", isAuthenticated, function(req, res) {
  //   res.sendfile(path.join(__dirname, "../views/user.handlebars"));
  // });
};
