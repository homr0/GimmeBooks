module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define('User', {

        userName: {
         type: Sequelize.STRING,
         notEmpty: true,
        },

        email: {
            type: Sequelize.STRING,
            primaryKey: true,
            validate: {
                isEmail: true,
            }
        },
        
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    User.associate = function(models) {

        User.hasMany(models.favoriteBooks);
        }
    

    return User;
    }