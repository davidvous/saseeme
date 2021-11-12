const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require("../../utils/validation")
const { Restaurants } = require('../../db/models');

const router = express.Router();

const validateCheckin = [
    check("comment")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a comment"),
    handleValidationErrors
];

router.get("/", asyncHandler(async (req, res) => {
    const allRestaurants = await Restaurants.findAll();
    return res.json(allRestaurants);
}))

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { user_id, title, address, city, state, zipCode, country, lat, lng } = req.body;
        const newRes = await Restaurants.create({
          user_id,
          title,
          address,
          city,
          state,
          zipCode,
          country,
          lat,
          lng,
        });
        return res.json({ newRes });
    })
);

// update checkin
// router.put("/id(\\d+)", asyncHandler(async (req, res, next) => {
//     const checkin = await Checkins.findByPk(req.params.id);

//     if (checkin) {


//         await checkin.save();
//         res.json(checkin);
//     } else {
//     }
// }));


module.exports = router;
