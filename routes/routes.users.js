var express = require('express');
var controller = require('../controller/controller.users');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;