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

        isbn: {
            type: DataTypes.STRING,
            notNull: true,
        }
    });

    favoriteBooks.associate = function(models) {

        favoriteBooks.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return favoriteBooks;

};