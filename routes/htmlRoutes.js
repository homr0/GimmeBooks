// var path = require("path");
var db = require("../models");

module.exports = function(app) {
  function userSession(req) {
    var hbsObject = {
      loggedIn: false
    };

    var authenticated = req.session.passport;

    if (authenticated && authenticated.user) {
      hbsObject = {
        loggedIn: true,
        user: authenticated.user.userName,
        id: authenticated.user.id
      };
    }

    return hbsObject;
  }

  // Load index page
  app.get("/", function(req, res) {
    var hbsObject = userSession(req);

    res.render("index", hbsObject);
  });

  // Load user page
  app.get("/user/:id", function(req, res) {
    db.User.findOne({
      include: [{ model: db.favoriteBook }],
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      var hbsObject = userSession(req);
      var currentUser = hbsObject.id;

      hbsObject.isUser = req.params.id === currentUser;
      hbsObject.username = "Unknown User";

      if (dbUser) {
        hbsObject.username = dbUser.userName;
        hbsObject.books = dbUser.favoriteBooks;
      }

      res.render("user", hbsObject);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
