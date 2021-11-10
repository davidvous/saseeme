'use strict';
module.exports = (sequelize, DataTypes) => {
    const Checkins = sequelize.define('Checkins', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        food_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: DataTypes.TEXT
    }, {});
    Checkins.associate = function(models) {
        Checkins.belongsTo(models.User, { foreignKey: 'user_id' });
        Checkins.belongsTo(models.Foods, { foreignKey: 'food_id' });
    };
    return Checkins;
};
