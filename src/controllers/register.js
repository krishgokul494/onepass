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
			console.log('trrr')
			res.status(409).send({
				name: error.name,
				description: 'Email already Exists'
			})
		})
	}else{
		console.log('mrrr')
		console.log(errors)
		res.status(400).send({
			name: 'InputFormatError',
			errors: errors.errors
		})
	}
}

module.exports = {
	register
}