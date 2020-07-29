const LocalStrategy = require("passport-local");
const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = (passport) => {
    // Signup
    passport.use("local-signup", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    },
        (req, email, password, done) => {
            var passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
            // Check user model to check if email exists already
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (user) {
                    return done(null, false);
                } else {
                    var data = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        name: req.body.name,
                        email: req.body.email,
                        password: passwordHash
                    }
                    db.User.create(data)
                        .then(newUser => {
                            if (newUser) {
                                return done(null, newUser);
                            }
                            return done(null, false);
                        })
                }
            })
        }
    ))
}