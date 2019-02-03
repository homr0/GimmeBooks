var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/user", function(req, res) {
    // findAll returns all enteries for a table when used with no options
<<<<<<< HEAD
    db.User.findAll({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    }).then(function(dbUser) {
      res.json(dbUser);
=======
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function(dbuser) {
      res.json(dbuser);
>>>>>>> fe5b2a579f8c704aa386adaeabc0d91bc3d868a7
    });
  });

  // Create a new example
  app.post("/api/favorites", function(req, res) {
<<<<<<< HEAD
    db.favoriteBooks.create({
      title:req.body.title,
      author:req.body.author,
      genre:req.body.genre,
      year:req.body.year,
      ISBN:req.body.ISBN,
      id:req.body.id
      }).then(function(dbUser) {
      res.json(dbUser);
    });
=======
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
>>>>>>> fe5b2a579f8c704aa386adaeabc0d91bc3d868a7
  });

  // Delete an example by id
  app.delete("/api/favorites/:id", function(req, res) {
<<<<<<< HEAD
    db.User.destroy({ 
      where: { 
        id: req.params.id
       }
     }).then(function(dbfavoriteBooks) {
      res.json(dbfavoriteBooks);
    });
=======
    db.user
      .destroy({
        where: {
          id: req.params.id
       }
     })
      .then(function(dbfavorite) {
        res.json(dbfavorite);
      });
>>>>>>> fe5b2a579f8c704aa386adaeabc0d91bc3d868a7
  });

  // PUT route for updating favoritebooks. We  can get the updated favorite books data from req.body
  app.get("/user/:id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // We use where to describe which objects we want to update
<<<<<<< HEAD
    db.favorite.update({
      title: req.body.title,
      authors: req.body.authors
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(favoriteBooks) {
      res.json(favoriteBooks);
    });
=======
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
>>>>>>> fe5b2a579f8c704aa386adaeabc0d91bc3d868a7
  });
};
