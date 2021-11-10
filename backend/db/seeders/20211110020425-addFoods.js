'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkInsert('Foods', [
            {
                id: 1,
                user_id: 1,
                restaurant_id: 1,
                name: "Spicy Beef Noodles",
                imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/E-893SSaOvqs-MVMOzC45Q/o.jpg",
                description: "Hand pulled noodles in rich beef broth.",
            }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
        */
        return queryInterface.bulkDelete('Foods', null, {});
    }
};
