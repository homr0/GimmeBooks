var db = require("../models");
var Cryptr = require("cryptr");
var cryptr = new Cryptr("myTotallySecretKey");

module.exports = function(app) {
  // Registers a new user.
  app.post("/register", (req, res) => {
    // Encrypt password.
    // var passphrase = cryptr.encrypt(req.body.password);

    // Create new user.
    db.User.create({
      userName: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbUser) {
      // Log in right away
      // Do something here.
      res.json(dbUser);
    });
  });

  app.post("/login", (req, res) => {
    // Encrypt password
    var passphrase = cryptr.encrypt(req.body.password);
    
    db.User.findOne({
      where: {
        email: req.body.email,
        password: passphrase
      }
    }).then((dbUser) => {
      // Log in user.
      // Do something here.
      res.json(dbUser);
    });
  });

  // Create a new favorite book for a user.
  app.post("/api/favorites", (req, res) => {
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
  app.get("/user/:id", (req, res) => {
    db.favoriteBooks.findAll({
      where: {
        UserId: req.params.id
      }
    }).then((favoriteBooks) => {
      const hbsObject = {
        books: favoriteBooks
      };

      res.render("user", hbsObject);
    })
  });

  // Delete a favorite book for a user
  app.delete("/user/:id/:bookId", (req, res) => {
    db.favoriteBooks.destroy({
      where: {
        UserId: req.params.id,
        id: req.params.bookId
      }
    }).then(function(dbfavoriteBooks) {
      res.json(dbfavoriteBooks);
    });
  });
};
