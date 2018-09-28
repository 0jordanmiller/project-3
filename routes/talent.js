const router = require("express").Router();
const talentController = require("../controllers/talentController");


router.route("/")
  .get(talentController.findAll)
  .post(talentController.create);


router
  .route("/:id")
  .get(talentController.findById)
  .put(talentController.update)
  .delete(talentController.remove);


module.exports = router;