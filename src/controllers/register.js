const User = require('../models').user
const crypto = require('crypto')
const {validationResult} = require('express-validator')
const register = async (req, res) => {
	var errors = validationResult(req)
	var encryptionSalt = crypto.randomBytes(16).toString('hex')
	if(errors.isEmpty()){
		await User.create({
			email: req.body.email,
			name: req.body.name,
			masterpassword: req.body.masterpassword,
			encryptionSalt: encryptionSalt,
			remainder: req.body.remainder
		}).then((user) => {
			res.send(user)
		}).catch((error) => {
			res.status(400).send({
				error: error
			})
		})
	}else{
		res.status(400).send({
			error: errors.errors
		})
	}
}

module.exports = {
	register
}