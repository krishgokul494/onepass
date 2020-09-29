const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models').user


passport.use(
	new LocalStrategy({
		usernameField: "email",
		passwordField: "masterpassword"
	}, async (username, password, done) => {
		console.log(username)
		console.log(password)
		await User.findOne({where: {email: username}}).then(user => {
			if(!user){
				console.log('username')
				return done(null, false, {message: "Invalid Email"})
			}
			if(user.masterpassword !== password){
				console.log('password')
				console.log(user.masterpassword)
				return done(null, false, {message: "Invalid Password"})
			}
			console.log('logged')
			return done(null, user)
		}).catch(err => {
			console.log(err)
			done(err)
		})
	})
)


passport.serializeUser(function(user, done) {
	done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
	console.log('deserialize');
	User.findOne({where: {id: id}}).then(user=> {
		done(null, user);
	}).catch(err => {
		done(err)
	})
});

// passport.use(new LocalStrategy(
//     {
//         usernameField: "email",
//         passwordField: "masterpassword"
//     },
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));