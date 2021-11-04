'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkInsert('Users', [
            {
                email: 'demo@gmail.com',
                username: 'gmaildemo',
                hashedPassword: bcrypt.hashSync('password'),
            },
            {
                email: 'demo@hotmail.com',
                username: 'hotmaildemo',
                hashedPassword: bcrypt.hashSync(faker.internet.password()),
            },
            {
                email: 'demo@yahoo.com',
                username: 'yahoodemo',
                hashedPassword: bcrypt.hashSync(faker.internet.password()),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete('Users', {
            username: { [Op.in]: ['gmaildemo', 'hotmaildemo', 'yahoodemo'] }
        }, {});
    }
};
