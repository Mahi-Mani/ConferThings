const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");

// Matches with `/api/user`
router.route("/")
    .get(userController.findAll)
// .post(userController.createUser);

router.post("/", (req, res, next) => {
    passport.authenticate("local-signup", (err, user) => {
        if (err) {
            return next(err)
        }
        if (!user) {
            returnData = {
                message: "User Exists",
                color: "red"
            }
            return res.json(returnData);
        }
        if (user) {
            returnData = {
                message: "User Created",
                color: "green"
            }
            res.json(returnData);
        }
    })(req, res, next);
})

router.post("/login", (req, res, next) => {
    passport.authenticate("local-login", (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            returnData = {
                message: "User not found",
                color: 'red'
            }
            res.json(returnData)
        } else {
            returnData = {
                message: "User successfully logged in",
                color: "green"
            }

            return res.json(returnData)
        }
    })(req, res, next)
})

module.exports = router;