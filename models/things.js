// Export Things Table
module.exports = function (sequelize, DataTypes) {
    var Things = sequelize.define("Things", {
        thingName: DataTypes.string,
        thingDesc: DataTypes.string,
        availableDate: DataTypes.date,
        location: DataTypes.string
    });

    Things.associate = function (models) {
        models.Things.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    // Think about hasOne relationship
    return Things;
}