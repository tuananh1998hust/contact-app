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

module.exports.postSignUp = (req, res, next) => {
	const email = req.body.email;
	const pass = req.body.password;
	const errors = [];

	const findEmail = db.get('users').find({ email: email }).value();

	if (findEmail) {
		errors.push('Account is already exist');
	}

	if (!req.body.name) {
		errors.push('Name is not require');
	}

	if (!req.body.phone) {
		errors.push('phone is not require');
	}

	if (!req.body.password) {
		errors.push('password is not require');
	}

	if (errors.length) {
		res.render('auth/signup', {
			errors: errors,
			value: req.body
		});
		return;
	}

	next();
}