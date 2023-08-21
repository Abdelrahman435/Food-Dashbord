var express = require("express");
var router = express.Router();
const { adminLogin } = require("../controllers/userController");
const { validate } = require("../validation/login_validation");
const { protect } = require("../middleware/protect");
const userController = require("../controllers/userController");

router.post("/login", validate(), adminLogin);

router.get("/admins/count", userController.getAllAdmins);

module.exports = router;
