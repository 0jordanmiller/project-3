const router = require('express').Router()
const passport = require('passport');
const path = require("path");

// router.get('/test', (req, res) => {
//     // handle with passport
//     res.send('logging in with google');
// })

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
)

module.exports = router;