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
        console.log(req);
        const { user_id, restaurant_id, name, imageUrl, description } = req.body;
        const food = await Foods.create({ user_id, restaurant_id, name, imageUrl, description });
        return res.json({ food });
    })
);

router.put(
    '/:id(\\d+)',
    asyncHandler(async (req, res, next) => {
        const food = await Product.findByPk(req.params.id);

        if (product) {
            product.image = req.body.image || product.image;
            product.name = req.body.name || product.name;
            product.price = req.body.price || product.price;

            await product.save();
            res.json({ product });
        } else {
            next(productNotFoundError(req.params.id));
        }
    })
);




module.exports = router;
