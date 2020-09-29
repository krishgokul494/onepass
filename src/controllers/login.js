// const passport = require('passport')
// const User = require('../models').user
// var user_id = null
// const login = async (req, res) => {
//     await User.findOne({where: {email: req.body.email}})
//         .then(user => {
//             console.log(user)
//             if(user){
//                 if(user.dataValues.masterpassword === req.body.masterpassword){
//                     user_id = user.dataValues.id
//                     res.send({login: 'success', encryptionSalt: user.dataValues.encryptionSalt})
//                 }else{
//                     res.status(400).send({error: 'Invalid Password'})
//                 }
//             }else{
//                 res.status(400).send({error: 'Invalid Email'})
//             }
//         }).catch(error => {
//             res.status(404).send(error)
//         })
	
//     console.log(user_id)
//     passport.serializeUser(function(user_id, done) {
//         done(null, user_id);
//     });
	
//     passport.deserializeUser(function(user_id, done) {
//         done(null, user_id);
//     });
// }

const login = (req, res) => {
	res.send('logged in')
}

module.exports = {
	login
}