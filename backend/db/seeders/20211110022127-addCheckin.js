'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkInsert('Checkins', [
            {
                id: 1,
                user_id: 1,
                food_id: 1,
                comment: "This was my first time trying this specific dish and it was amazing!",
                createdAt: Date.now(),
                updatedAt: Date.now(),
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkDelete('Checkins', null, {});
    }
};
