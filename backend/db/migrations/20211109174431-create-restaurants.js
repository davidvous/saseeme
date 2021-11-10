'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Restaurants', {
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
                    model: 'Users',
                },
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            address: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            city: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            state: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            zipCode: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
            country: {
                allowNull: false,
                type: Sequelize.STRING(25)
            },
            lat: {
                type: Sequelize.DECIMAL(10, 7)
            },
            lng: {
                type: Sequelize.DECIMAL(10, 7)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Restaurants');
    }
};
