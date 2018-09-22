const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const Keys = require('./keys');

passport.use(new GoogleStrategy({
    // options for the strat
    callbackURL: '/auth/google/redirect',
    clientID: Keys.google.clientID,
    clientSecret: Keys.google.clientSecret
}, () => {

})
) 