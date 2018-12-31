const md5 = require('md5');
var db = require('../db');

module.exports.postLogin = (req, res, next) => {
	const email = req.body.email;
	const password = md5(req.body.password);

	const user = db.get('users').find({ email: email }).value();

	if (!user) {
		res.render('auth/login', { errors: ['User does not exist.'], value: req.body });
		return;
	}

	if (password !== user.password) {
		res.render('auth/login', { errors: ['Wrong password'], value: req.body });
		return;
	}

	next();
}