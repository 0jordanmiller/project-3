const passport = require('passport')
const login = require('./login');
const register = require('./register');
const User = require('../models/talent');


// Passport needs to be able to serialize and deserialize users to support persistent login sessions
passport.serializeUser(function (user, done) {
    console.log('serializing user: '); console.log(user);
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        console.log('deserializing user:', user);
        done(err, user);
    });
});

// Setting up Passport Strategies for Login and SignUp/Registration
passport.use('local', login);
passport.use('register', register);

module.exports = passport