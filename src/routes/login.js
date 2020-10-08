const router = require('express').Router()
// const loginController = require('../controllers/login')
const passport = require('passport')

router.post('', passport.authenticate('local'), (req, res) => {
	console.log(req.user)
	res.send({
		email: req.user.email,
		name: req.user.name,
		encryptionSalt: req.user.encryptionSalt
	});
})

module.exports = router