// Export user model
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.string,
        firstName: DataTypes.string,
        lastName: DataTypes.string,
        email: DataTypes.string,
        password: DataTypes.password
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