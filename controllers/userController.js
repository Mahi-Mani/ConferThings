const db = require("../models");

module.exports = {
    // To find all users
    findAll: (req, res) => {
        db.User.findAll({})
            .then(users => {
                res.json(users);
            }).catch(err => {
                console.log("Error", err);
            })
    }
}