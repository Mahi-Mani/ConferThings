const router = require("express").Router();
const rentController = require("../../controllers/rentController");

// Matches with `/api/rent`
router.route("/")
    .get(rentController.getAllRentedThings);

// Matches with `/api/rent/:userId`
router.route("/:userId")
    .get(rentController.getAllRentedByUser);

module.exports = router;