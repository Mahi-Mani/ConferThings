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

    // Login
    passport.use("local-login", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    },
        (req, email, password, done) => {
            var isValidPassword = (userPass, password) => {
                return bcrypt.compareSync(password, userPass);
            }
            db.User.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (!user) {
                    return done(null, false);
                }
                if (!isValidPassword(user.password, password)) {
                    return done(null, false);
                }
                return done(null, user);
            }).catch(err => {
                console.log("Error passport login", err);
                return done(null, false);
            })
        }
    ))

    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    })

    passport.deserializeUser((id, cb) => {
        db.User.findOne({
            where: {
                id: id
            }
        }).then(user => {
            cb(null, user);
        })
    })
}