var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/users", function(req, res) {
    // findAll returns all enteries for a table when used with no options
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  // Create a new example
  app.post("/api/favorites", function(req, res) {
    db.favoritebooks
      .create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year,
        ISBN: req.body.ISBN,
        id: req.body.id
    })
      .then(function(dbuser) {
        res.json(dbuser);
      });
  });

  // Delete an example by id
  app.delete("/api/favorites/:id", function(req, res) {
    db.user
      .destroy({
        where: {
          id: req.params.id
       }
     })
      .then(function(dbfavorite) {
        res.json(dbfavorite);
      });
  });

  // PUT route for updating favoritebooks. We  can get the updated favorite books data from req.body
  app.get("/user/:id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // We use where to describe which objects we want to update
    db.favorite
      .update(
        {
          title: req.body.title,
          authors: req.body.authors
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(favoritebooks) {
        res.json(favoritebooks);
      });
  });
};
