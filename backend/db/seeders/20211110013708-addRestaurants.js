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
                user_id: 1,
                title: "Shang Artisan Noodle",
                address: "4983 W Flamingo Rd Ste B",
                city: "Las Vegas",
                state: "Nevada",
                zipCode: "89103",
                country: "USA",
                lat: 36.114890,
                lng: -115.209980,
            },
            {
                user_id: 1,
                title: "Izakaya Go",
                address: "3775 Spring Mountain Rd Ste 301",
                city: "Las Vegas",
                state: "Nevada",
                zipCode: "89102",
                country: "USA",
                lat: 36.126390,
                lng: -115.189730,
            },
            {
                user_id: 1,
                title: "La Neta Cocina y Lounge",
                address: "1770 Festival Plaza Dr Ste 200",
                city: "Las Vegas",
                state: "Nevada",
                zipCode: "89135",
                country: "USA",
                lat: 36.152530,
                lng: -115.332280,
            },
            {
                user_id: 2,
                title: "Oc and Lau 2",
                address: "9892 Westminster Blvd Unit R",
                city: "Garden Grove",
                state: "California",
                zipCode: "92844",
                country: "USA",
                lat: 33.758500,
                lng: -117.956590,
            },
            {
                user_id: 2,
                title: "Soowon Galbi KBBQ",
                address: "856 S Vermont Ave Ste C",
                city: "Los Angeles",
                state: "California",
                zipCode: "90005",
                country: "USA",
                lat: 34.056430,
                lng: -118.291320,
            },
            {
                user_id: 2,
                title: "Rockin' Cajun Seafood and Grill",
                address: "940 E Dominguez St Ste C",
                city: "Carson",
                state: "California",
                zipCode: "90746",
                country: "USA",
                lat: 33.841730,
                lng: -118.261893,
            },
            {
                user_id: 3,
                title: "Bun Bo Hue An Nam",
                address: "740 Story Rd Ste 3",
                city: "San Jose",
                state: "California",
                zipCode: "95122",
                country: "USA",
                lat: 37.328832,
                lng: -121.858158,
            },
            {
                user_id: 3,
                title: "Com Tam Dat Thanh",
                address: "1055 Tully Rd Ste A",
                city: "San Jose",
                state: "California",
                zipCode: "95122",
                country: "USA",
                lat: 37.314334,
                lng: -121.838006,
            },
            {
                user_id: 4,
                title: "LP Steamers",
                address: "1100 E Fort Avenue",
                city: "Baltimore",
                state: "Maryland",
                zipCode: "21230",
                country: "USA",
                lat: 39.270952,
                lng: -76.598613,
            },
            {
                user_id: 4,
                title: "Charming Elephant",
                address: "2324 Boston St Ste B",
                city: "Baltimore",
                state: "Maryland",
                zipCode: "21224",
                country: "USA",
                lat: 39.282832,
                lng: -76.583608,
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
