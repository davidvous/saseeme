const express = require('express');
const asyncHandler = require('express-async-handler');
const { Foods } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const foodDishes = await Foods.findAll();
    return res.json(foodDishes)
}))


module.exports = router;
