var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    var user = req.session;
    console.log(user);
    var hbsObject = {
      loggedIn: false
    };

    if (user.passport) {
      hbsObject = {
        loggedIn: true
      };
    }

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
};
