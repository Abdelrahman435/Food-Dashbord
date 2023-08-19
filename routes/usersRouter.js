var express = require('express');
var router = express.Router();
const { adminLogin } = require("../controllers/userController");
const {validate} = require('../validation/login_validation');
const {protect} = require('../middleware/protect');

router.post("/login", validate(), adminLogin);

module.exports = router;
