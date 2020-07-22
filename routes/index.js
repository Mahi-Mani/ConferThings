const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API routes
router.use("/api", apiRoutes);

// To send react app if no route is hit
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;