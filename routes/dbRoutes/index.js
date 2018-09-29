const router = require("express").Router();
const db = require("../../controllers/talentController");

router.get("/search", (req, res) => {
    res.send('route')
});

module.exports = router;
