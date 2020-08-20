const db = require("../models");

module.exports = {
    // To insert into things table
    create: (req, res) => {
        console.log("***************BEFORE INSERTION*********");
        db.Things.create(req.body)
            .then(things => {
                res.json(things);
            }).catch(err => {
                console.log("Error", err);
                res.json(err);
            })
    },
    // To find all things
    findAll: (req, res) => {
        db.Things.findAll({})
            .then(things => {
                res.json(things);
            }).catch(err => {
                res.json(err);
            })
    },
    // To find all things that belong to a particular user
    findBelongingsOfUser: (req, res) => {
        db.Things.findAll({
            where: {
                UserId: req.params.userId
            }
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.json(err);
        })
    },
    // To get details of a particular thing
    getDetailsOfThings: (req, res) => {
        db.Things.findAll({
            where: {
                id: req.params.thingId
            }
        }).then(result => {
            res.json(result);
        }).catch(err => {
            res.json(err);
        })
    }
}