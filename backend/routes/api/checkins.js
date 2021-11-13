const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require("../../utils/validation")
const { Checkins } = require('../../db/models');

const router = express.Router();

const validateCheckin = [
    check("comment")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a comment"),
    handleValidationErrors
];

//get all checkins
router.get("/", asyncHandler(async (req, res) => {
    const AllCheckins = await Checkins.findAll();
    return res.json(AllCheckins);
}))

//get individual checkin
router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    const checkin = await Checkins.findByPk(req.params.id);
    return res.json(checkin);
}))

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { user_id, food_id, comment  } =
      req.body;
    const data = await Checkins.create({
        user_id, food_id, comment
    });
    return res.json({ data });
  })
);

router.put(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const checkin = await Checkins.findByPk(req.params.id);

    if (checkin) {
      checkin.user_id = req.body.user_id || checkin.user_id;
      checkin.food_id = req.body.food_id || checkin.food_id;
      checkin.comment = req.body.comment || checkin.comment;

      await checkin.save();
      res.json({ checkin });
    }
  })
);

module.exports = router;
