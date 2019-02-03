module.exports = function(sequelize, DataTypes) {
  var favoriteBooks = sequelize.define('favoriteBooks', {
    title: {
      type: DataTypes.STRING,
      notNull: true,
    },

    author: {
      type: DataTypes.STRING,
      notNull: true,
    },

    genre: {
      type: DataTypes.STRING,
      notNull: false,
    },

    year: {
      type: DataTypes.DATEONLY,
      notNull: true,
    },

<<<<<<< HEAD
        image_url: {
            type: DataTypes.STRING,
            notNull: false,
        },

        isbn: {
            type: DataTypes.STRING,
            notNull: true,
        }
    });

  favoriteBooks.associate = function(models) {
      favoriteBooks.belongsTo(models.User, {
          foriegnKey: {
              allowNull: true
          }
      });
  };
=======
    image_url: {
      type: DataTypes.STRING
    },

    isbn: {
      type: DataTypes.STRING,
      notNull: true,
    }
  });
>>>>>>> fe5b2a579f8c704aa386adaeabc0d91bc3d868a7

  return favoriteBooks;
};

