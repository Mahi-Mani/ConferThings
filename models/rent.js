// Export Rent
module.exports = function (sequelize, DataTypes) {
    var Rent = sequelize.define("Rent", {
        returnDate: DataTypes.DATE,
        returnLocation: DataTypes.STRING
    });

    Rent.associate = function (models) {
        models.Rent.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Rent.associate = function (models) {
        models.Rent.belongsTo(models.Things, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Rent;
}