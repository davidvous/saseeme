'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Foods', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                },
            },
            restaurant_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Restaurants",
                },
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            imageUrl: {
                type: Sequelize.STRING(250)
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Foods');
    }
};
