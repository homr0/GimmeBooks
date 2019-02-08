var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Registers a new user.
  app.post("/register", function(req, res) {
    console.log(req.body);
    // Create new user.
    db.User.create({
      userName: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the login page.
  // Otherwise the user will be sent an error
  app.post("/login", passport.authenticate("local"), function(req, res) {
    // We want to check that our user is authenticated using Passport and pass that on into the session.
    console.log(req);
    res.json("../views/user.handlebars");
  });

  // Route for getting some data about our user to be used client side
  app.get("/currently", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Create a new favorite book for a user.
  app.post("/api/favorites", function(req, res) {
    db.favoriteBooks
      .create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year,
        ISBN: req.body.ISBN,
        UserId: req.body.id
      })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  // Gets the user's favorite books list.
  app.get("/user/:id", function(req, res) {
    db.favoriteBooks
      .findAll({
        where: {
          UserId: req.params.id
        }
      })
      .then(function(favoriteBooks) {
        var hbsObject = {
          books: favoriteBooks
        };

        res.render("user", hbsObject);
      });
  });

  // Delete a favorite book for a user
  app.delete("/user/:id/:bookId", function(req, res) {
    db.favoriteBooks
      .destroy({
        where: {
          UserId: req.params.id,
          id: req.params.bookId
        }
      })
      .then(function(dbfavoriteBooks) {
        res.json(dbfavoriteBooks);
      });
  });
};
