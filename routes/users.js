var express = require('express');
var router = express.Router();

const userContoller = require("../controllers/userController")

router.post('/alta', userContoller.logUp);
router.post('/login',userContoller.logIn);

module.exports = router;
