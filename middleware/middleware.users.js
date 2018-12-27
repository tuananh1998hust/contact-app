module.exports.postCreate = (req, res, next) => {
	let errors = [];
	if (!req.body.name) {
		errors.push('Name is not require');
	}

	if (!req.body.phone) {
		errors.push('Phone is not require');
	}

	if (errors.length) {
		res.render('users/create', {
			errors: errors,
			value: req.body
		});
		return;
	}

	next();
}