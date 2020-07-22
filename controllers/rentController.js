const db = require("../models");

module.exports = {
    // To find all rented things
    getAllRentedThings: (req, res) => {
        db.Rent.findAll({})
            .then(result => {
                res.json(result);
            }).catch(err => {
                res.json(err);
            });
    },
    // To find all things rented by a particular user
    getAllRentedByUser: (req, res) => {
        db.Rent.findAll({
            where: {
                UserId: req.params.userId
            }
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.json(err);
        });
    }
}