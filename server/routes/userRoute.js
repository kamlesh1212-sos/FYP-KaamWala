var express = require("express");
var router = express.Router();

var userController = require("./../controller/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);


module.exports = router;
