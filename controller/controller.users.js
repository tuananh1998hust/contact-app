var db = require('../db');
var shortid = require('shortid');

module.exports.index = (req, res) => {
	let users = db.get('users').value().sort((a, b) => {
		let nameA = a.name.toLowerCase();
		let nameB = b.name.toLowerCase();

		if (nameA < nameB) {
			return -1;
		}

		if (nameA > nameB) {
			return 1;
		}

		return 0;
	});

	res.render('users/index', {
		users: users
	});
}

module.exports.search = (req, res) => {
	let q = req.query.q;

	let matchedUsers = db.get('users').value().filter((user) => {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('users/index', {
		users: matchedUsers
	});
}

module.exports.getCreate = (req, res) => {
	res.render('users/create');
}

module.exports.viewsUser = (req, res) => {
	let id = req.params.id;

	let user = db.get('users').find({ id: id }).value();

	res.render('users/views', { user: user });
}

module.exports.postCreate = (req, res, next) => {
	req.body.id = shortid.generate();

	db.get('users')
		.push(req.body)
		.write();

	res.redirect('/users');
}