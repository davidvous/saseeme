// backend/routes/api/index.js
const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth.js');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const foodsRouter = require('./foods.js');
const checkinsRouter = require('./checkins.js');
const restaurantsRouter = require('./restaurants.js');
const { Checkins } = require("../../db/models");
const { Foods } = require("../../db/models");
const { Restaurants } = require("../../db/models");

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'gmaildemo'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

router.post(
  "/search",
  asyncHandler(async (req, res) => {
    const { search } = req.body;

    const foodResults = await Foods.findAll({
      where: {
        name: {
          [Op.iLike]: search,
        },
      },
    });

    const checkinResults = await Checkins.findAll({
      where: {
        comment: {
          [Op.iLike]: search,
        },
      },
    });

    const resResults = await Restaurants.findAll({
      where: {
        title: {
          [Op.iLike]: search,
        },
      },
    });

    return res.json({ foodResults, checkinResults, resResults });
  })
);

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/foods', foodsRouter);
router.use('/checkins', checkinsRouter);
router.use('/restaurants', restaurantsRouter);

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
// });

module.exports = router;
