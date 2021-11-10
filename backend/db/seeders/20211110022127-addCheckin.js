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
            },
            {
                id: 2,
                user_id: 1,
                food_id: 2,
                comment: "Uni pasta is delicious. I have never had this before but someone told me I had to try it. They said it tastes like the ocean conducts flatulence in your mouth. I didn't quite understand what that meant until I tried this dish. But it was good!",
            },
            {
                id: 3,
                user_id: 1,
                food_id: 3,
                comment: "I am not normally a big fan of Mexican food, but I decided to stop by on a whim after doing some shopping. Great dish to try! You will not go wrong if you decide to order this.",
            },
            {
                id: 4,
                user_id: 2,
                food_id: 4,
                comment: "I have been all over the world and this is my favorite dish, especially here. They often run out but this time I was lucky. Order it! And I'm gonna order it again next time too!",
            },
            {
                id: 5,
                user_id: 2,
                food_id: 5,
                comment: "I love the KBBQ here. Something about being out and drunk tonight and having this bomb dish here to fall back on. Chef's Kiss.",
            },
            {
                id: 6,
                user_id: 2,
                food_id: 6,
                comment: "I love the seafood boil here. And this time it did not disappoint! Right after Halloween, so there was not the usual crowd this time!",
            },
            {
                id: 7,
                user_id: 3,
                food_id: 7,
                comment: "I don't normally go out to eat but this particular visit was amazing. That spicy beef....sooooo much umami!",
            },
            {
                id: 8,
                user_id: 3,
                food_id: 8,
                comment: "I had no idea what broken rice is. I just decided to stop here because it smelled good with my girlfriend. And whoah, this is really good. We are gonna remember this checkin and come back again and get the same thing!",
            },
            {
                id: 9,
                user_id: 4,
                food_id: 9,
                comment: "I'm from the East Coast so I am no stranger to seafood and blue crabs. But the blue crabs here are so good! This did not disappoint me at all and I will continue to hit this spot up!",
            },
            {
                id: 10,
                user_id: 4,
                food_id: 10,
                comment: "The salad this time was missing the usual kick. I don't know if it was the server I had, she seemed like she was in a bad mood and I did not want to push it. I guess I will try again next time.",
            },
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
