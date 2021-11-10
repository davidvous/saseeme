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
            },
            {
                id: 2,
                user_id: 1,
                restaurant_id: 2,
                name: "Uni Pasta",
                imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/o3Qd2yJz-af9NCJv9vMfcQ/o.jpg",
                description: "Scrumptious uni pasta made with brown rice.",
            },
            {
                id: 3,
                user_id: 1,
                restaurant_id: 3,
                name: "Churrasco",
                imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/v45VeVuIZXQ8fvJsbog8AQ/o.jpg",
                description: "Cooked Chimichurri Marinated Skirt Steak with roasted potato and chorizo.",
            },
            {
                id: 4,
                user_id: 2,
                restaurant_id: 4,
                name: "Razor Clams",
                imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/YU4hz7ppkVREFmPa7AZdog/o.jpg",
                description: "Grilled razor clams, basted in garlic, oil, and ginger sauce.",
            },
            {
                id: 5,
                user_id: 2,
                restaurant_id: 5,
                name: "Marinated Short Rib",
                imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/KONvRl323OCleR32Tv-SRQ/o.jpg",
                description: "Also known as Kalbi. Typically grilled with other assortments of meat.",
            },
            {
                id: 6,
                user_id: 2,
                restaurant_id: 6,
                name: "Seafood Boil",
                imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/bcxWEJ2ZhPDEZx-YO6IjvQ/o.jpg",
                description: "Medley of seafood items including shrimp, clams, crab legs, and shellfish.",
            },
            {
                id: 7,
                user_id: 3,
                restaurant_id: 7,
                name: "Spicy Beef Noodle Soup",
                imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/xpYlBiJa6dCxyTfsO_R9YQ/o.jpg",
                description: "Spicy beef broth seasoned with chili oil and served with thick rice noodles.",
            },
            {
                id: 8,
                user_id: 3,
                restaurant_id: 8,
                name: "Broken Rice",
                imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/EtjfZXpC025jeV7gNogoaA/o.jpg",
                description: "Traditional Vietnamese Broken Rice served with shredded pork, pork chop, egg, and vegetables.",
            },
            {
                id: 9,
                user_id: 4,
                restaurant_id: 9,
                name: "Steamed Crabs",
                imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/iPQLG3W0Fl_KTPhOlV6mKg/o.jpg",
                description: "Chesapeake Bay Blue Crabs steamed and served with Old Bay Seasoning.",
            },
            {
                id: 10,
                user_id: 4,
                restaurant_id: 10,
                name: "Papaya Salad",
                imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/iamiC3ISxfcjp7SD5uJ6Uw/o.jpg",
                description: "House made salad made with Asian cabbage, shredded green papaya, cherry tomatoes, and fish sauce.",
            },
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
