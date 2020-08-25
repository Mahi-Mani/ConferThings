// Export Things Table
module.exports = function (sequelize, DataTypes) {
    var Things = sequelize.define("Things", {
        thingName: DataTypes.STRING,
        thingDesc: DataTypes.STRING,
        availableDate: DataTypes.DATE,
        location: DataTypes.STRING,
        image: DataTypes.STRING
    });

    Things.associate = function (models) {
        models.Things.hasOne(models.Rent, {
            onDelete: "CASCADE"
        });
    };

    Things.associate = function (models) {
        models.Things.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Things;
}