var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/user", function(req, res) {
    // findAll returns all enteries for a table when used with no options
    db.User.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.post("/api/favorites", function(req, res) {
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
  });

  // Delete an example by id
  app.delete("/api/favorites/:id", function(req, res) {
      db.User
      .destroy({
        where: { 
        id: req.params.id
       }
     }).then(function(dbfavoriteBooks) {
      res.json(dbfavoriteBooks);
    });
  });


  // PUT route for updating favoriteBooks. We can get the updated fav books data from req.body
  app.get("/user/:id", function(req, res) {
    db.favoriteBooks
    .update(
      {
        title: req.body.title,
        authors: req.body.authors
      },
      {
        where: {
          id: req.body.id
      }
    }).then(function(favoriteBooks) {
      res.json(favoriteBooks);
    });
  });
};

//passport.js /login you will get redirected to auth0, to a page where you can select the identity provider
app.get('/callback',
passport.authenticate('auth0', {failureRedirect: '/login' }),
function(req, res) {
  if(!req.user) {
    throw new Error ('user null');
  }
res.redirect("/")
});

app.get('/login',
passport.authenticate('auth0', {}), function (req, res) {
  res.redirect("/");
});


      
  

