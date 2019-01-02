var md5 = require('md5');
var shortid = require('shortid');

var db = require('../db');

module.exports.index = (req, res) => {
	res.render('auth/login');
}

module.exports.postLogin = (req, res) => {
	const user = db.get('users').find({ email: req.body.email }).value();

	res.cookie('userId', user.id, { signed: true });

	res.redirect('/users');
}

module.exports.signUp = (req, res) => {
	res.render('auth/signup');
}

module.exports.postSignUp = (req, res) => {
	req.body.id = shortid.generate();
	req.body.password = md5(req.body.password);

	db.get('users')
		.push(req.body)
		.write();

	res.redirect('/auth/login');
}

