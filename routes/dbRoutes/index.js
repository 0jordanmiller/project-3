const router = require("express").Router();
const db = require("../../controllers/talentController.js");

router.post("/search", (req, res) => {
    console.log('!!!!!!!!!!!1line 5 index.js:', req.body);
    db.findAll(req.body, res)
    console.log('aaaa');
});

module.exports = router;
