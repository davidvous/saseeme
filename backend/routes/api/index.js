// backend/routes/api/index.js
const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const foodsRouter = require('./foods.js');
const checkinsRouter = require('./checkins.js');
const restaurantsRouter = require('./restaurants.js');

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

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/foods', foodsRouter);
router.use('/checkins', checkinsRouter);
router.use('/restaurants', restaurantsRouter);

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
// });

module.exports = router;
