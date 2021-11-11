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

//get all checkins
router.get("/", asyncHandler(async (req, res) => {
    const allRestaurants = await Restaurants.findAll();
    return res.json(allRestaurants);
}))

//get individual checkin
router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    const checkin = await Checkins.findByPk(req.params.id);
    return res.json(checkin);
}))

//create checkin
router.post("/", validateCheckin, asyncHandler(async (req, res) => {
    const { destructureREQBODY } = req.body;

    const checkin = await Checkins.create({ destructureREQBODY });

    return res.json(checkin);
}))

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
