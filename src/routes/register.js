const registerController = require('../controllers/register')
const router = require('express').Router()
const {body} = require('express-validator')

router.post('', 
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('name').isAlpha().withMessage('Invalid Name').isLength({min: 3}).withMessage('should contain atleast 3 character'),
    body('masterpassword').isString().withMessage('Enter valid password'),
    body('remainder').isString().withMessage('Enter valid string')
  ], registerController.register)

module.exports = router

//password patter:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/