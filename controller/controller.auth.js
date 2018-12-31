module.exports.index = (req, res) => {
	res.render('auth/login');
}

module.exports.postLogin = (req, res) => {
	res.redirect('/users');
}