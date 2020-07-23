const router = require("express").Router();
const thingController = require("../../controllers/thingController");

// Matches with `/api/thing`
router.route("/")
    .get(thingController.findAll);

// Matches with `/api/things/:userId`
router.route(":userId")
    .get(thingController.findBelongingsOfUser);

// Matches with `/api/things/:thingId`
router.route("/:thingId")
    .get(thingController.getDetailsOfThings);

module.exports = router;