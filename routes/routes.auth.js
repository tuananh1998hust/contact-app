var express = require('express');
var router = express.Router();

var controller = require('../controller/controller.auth');

router.get('/login', controller.index);

module.exports = router;