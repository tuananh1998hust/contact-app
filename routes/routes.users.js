var express = require('express');
var router = express.Router();

const controller = require('../controller/controller.users.js');
const middleware = require('../middleware/middleware.users.js');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.getCreate);

router.get('/views/:id', controller.viewsUser);

router.get('/views/:id/edit', controller.editUser);

router.post('/create', middleware.postCreate ,controller.postCreate);

router.post('/views/:id/edit', controller.postEdit);

module.exports = router;
