'use strict';
module.exports = (sequelize, DataTypes) => {
    const Foods = sequelize.define('Foods', {
        user_id: DataTypes.INTEGER,
        restaurant_id: DataTypes.INTEGER,
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 50],
            },
        },
        imageUrl: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    }, {});
    Foods.associate = function(models) {
        // associations can be defined here
    };
    return Foods;
};
