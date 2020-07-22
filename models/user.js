// Export user model
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    User.associate = function (models) {
        models.User.hasMany(models.Things, {
            onDelete: "CASCADE"
        });
    };

    User.associate = function (models) {
        models.User.hasMany(models.Rent, {
            onDelete: "CASCADE"
        });
    };

    return User;
}