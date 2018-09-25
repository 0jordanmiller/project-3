const router = require('express').Router()
const passport = require('../../passport');


router.post('/auth/login',
    function (req, res, next) {
        console.log(req.body)
        console.log('================')
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('POST to /login')
        const user = JSON.parse(JSON.stringify(req.user)) // hack
        const cleanUser = Object.assign({}, user)
        if (cleanUser.local) {
            console.log(`Deleting ${cleanUser.local.password}`)
            delete cleanUser.local.password
        }
        res.json({ user: cleanUser })
    }
)

router.post('/logout', (req, res) => {
    if (req.user) {
        req.session.destroy()
        res.clearCookie('connect.sid') // clean up!
        return res.json({ msg: 'logging you out' })
    } else {
        return res.json({ msg: 'no user to log out!' })
    }
})


/* GET Registration Page */
router.get('/signup', function (req, res) {
    res.render('register'/* , { message: req.flash('message') } */);
});

/* Handle Registration POST */
router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/signout', function (req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;