var db = require('../db');
var shortid = require('shortid');

module.exports.index = (req, res) => {
	res.render('users/index');
}