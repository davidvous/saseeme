'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkInsert('Restaurants', [
            {
                id: 1,
                title: "Shang Artisan Noodle",
                address: "4983 W Flamingo Rd Ste B",
                city: "Las Vegas",
                state: "Nevada",
                zipCode: "89103",
                country: "USA",
                lat: 36.114890,
                lng: -115.209980,
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkDelete('Restaurants', null, {});
    }
};
