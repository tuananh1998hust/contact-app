var db = require('../db');
var shortid = require('shortid');

module.exports.index = (req, res) => {
	res.render('users/index', {
		users: db.get('users').value()
	});
}

module.exports.getCreate = (req, res) => {
	res.render('users/create');
}

module.exports.postCreate = (req, res, next) => {
	req.body.id = shortid.generate();

	db.get('users')
		.push(req.body)
		.write();

	res.redirect('/users');
}