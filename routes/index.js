const router = require('express').Router();
const authRoutes = require('./authRoutes');
const path = require('path');

router.use(authRoutes);

router.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
