const router = require("express").Router();
const dataController = require("../../controllers/dataController");

// Matches with "/api/data"
router.route("/")
  .get(dataController.findAll)

module.exports = router;