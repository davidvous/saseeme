const express = require('express');
const asyncHandler = require('express-async-handler');
const { Foods } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const foodDishes = await Foods.findAll();
    return res.json(foodDishes)
}))

router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const food = await Foods.findByPk(req.params.id);
        if (food) {
            return res.json({ food });
        }
    })
);

router.delete('/:id(\\d+)', async (req, res) => {
    const food = await Foods.findByPk(req.params.id);
    if (food) {
        await food.destroy();
        res.status(204).end();
    }
});

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { user_id, restaurant_id, name, imageUrl, description } = req.body;
        const food = await Foods.create({ user_id, restaurant_id, name, imageUrl, description });
        return res.json({ food });
    })
);

router.put(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
        const food = await Foods.findByPk(req.params.id);

        if (food) {
            food.name = req.body.name || food.name;
            food.imageUrl = req.body.imageUrl || food.imageUrl;
            food.description = req.body.description || food.description;

            await food.save();
            res.json({ food });
        } 
    })
);




module.exports = router;
