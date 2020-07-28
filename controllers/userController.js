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
    },
    createUser: (req, res) => {
        console.log("Create user details", req.body);
        db.User.create(req.body)
            .then(result => {
                res.json(result);
            }).catch(err => {
                console.log("Error", err);
                res.json(err);
            })
    }
}