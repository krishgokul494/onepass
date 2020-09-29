const registerController = require('../controllers/register')
const router = require('express').Router()
const {body} = require('express-validator')

router.post('', [body('email').isEmail().withMessage('Invalid Email'), body('masterpassword').isString().notEmpty().withMessage('Password is not in correct format'), body('remainder').isString().withMessage('Enter valid string')], registerController.register)

module.exports = router


//password patter:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/