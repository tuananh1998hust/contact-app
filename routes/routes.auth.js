var express = require('express');
var router = express.Router();

var controller = require('../controller/controller.auth');
var middleware = require('../middleware/middleware.auth');

router.get('/login', controller.index);

router.post('/login', middleware.postLogin, controller.postLogin);

router.get('/signup', controller.signUp);

router.post('/signup', middleware.postSignUp, controller.postSignUp);

module.exports = router;