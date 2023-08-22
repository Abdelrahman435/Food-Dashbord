var express = require("express");
var router = express.Router();
const customer = require("../controllers/customerController")

router.get('/new', customer.newCustomer)
router.get('/old', customer.oldCustomer)
router.get('/come', customer.comeBackCustomer)

module.exports = router