// Export Rent
module.exports = function (sequelize, DataTypes) {
    var Rent = sequelize.define("Rent", {
        returnDate: DataTypes.Date,
        returnLocation: DataTypes.string
    });

    Rent.associate = function (models) {
        models.Rent.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Rent;
}