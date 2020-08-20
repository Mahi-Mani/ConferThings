const router = require("express").Router();
const thingController = require("../../controllers/thingController");

// Matches with `/api/thing`
router.route("/")
    .get(thingController.findAll)
    .post(thingController.create);

// Matches with `/api/thing/user/:userId`
router.route("/user/:userId")
    .get(thingController.findBelongingsOfUser);

// Matches with `/api/thing/thing/:thingId`
router.route("/thing/:thingId")
    .get(thingController.getDetailsOfThings);

module.exports = router;