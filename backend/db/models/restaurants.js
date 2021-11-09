'use strict';
module.exports = (sequelize, DataTypes) => {
    const Restaurants = sequelize.define('Restaurants', {
        user_id: DataTypes.INTEGER,
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50],
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50],
            },
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50],
            },
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 25],
            },
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10],
            },
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 25],
            },
        },
        lat: DataTypes.DECIMAL,
        lng: DataTypes.DECIMAL
    }, {});
    Restaurants.associate = function(models) {
        Restaurants.belongsTo(models.User, { foreignKey: 'user_id' });
    };
    return Restaurants;
};
