const router = require("express").Router();
const userRoutes = require("./user");
const thingRoutes = require("./thing");
const rentRoutes = require("./rent");

// User routes
router.use("/user", userRoutes);
// Thing routes
router.use("/thing", thingRoutes);
// Rent routes
router.use("/rent", rentRoutes);

module.exports = router;