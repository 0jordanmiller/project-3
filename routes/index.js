const router = require('express').Router();
const authRoutes = require('./authRoutes');
const talentRoutes = require('./talent');
const path = require('path');

router.use(authRoutes);
router.use("/talent", talentRoutes);

router.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
