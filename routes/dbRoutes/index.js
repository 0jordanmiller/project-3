const router = require("express").Router();
const db = require("../../controllers/talentController");

router.get("/search", (req, res) => {
    db.findAll({zipcode: [array]})
});

module.exports = router;
