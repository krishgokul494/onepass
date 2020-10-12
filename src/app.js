// middleware imports
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config')
const session = require('express-session')
const sessionStore = require('express-session-sequelize')(session.Store)
const passport = require('passport')

// general variables
const env = process.env.NODE_ENV || 'development'
const static_folder = env === 'development' ? '/dev public' : '/public'
const origin = process.env.server_url || 'http://localhost:8080'

// sessionStore instanstiate
const sequelizeSessionStore = new sessionStore({
	db: sequelize
})

// routes import
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')
const saveRoutes = require('./routes/save')
const vaultRoutes = require('./routes/vault')
const reportRoutes = require('./routes/report')

// express and middleware  instantiate 
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

// static folder declaration
app.use(express.static(__dirname + static_folder))

// cross origin declarations 
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", origin)
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
	res.header("Access-Control-Allow-Credentials", true)
	res.header("Access-Control-Allow-Headers", "content-type")
	next()
})

// session middleware
app.use(session({
	secret: [config.sessionSecret],
	cookie: {
		maxAge: 1*60*60*1000
	},
	store:sequelizeSessionStore
  }))

// passport instantiate
require('./config/passport-setup')
app.use(passport.initialize())
app.use(passport.session())

// vue static file delivery
app.get('/*/', (req, res) => {
	res.sendFile(__dirname + static_folder + '/index.html')
})

// check authentication status
app.post('/isAuthenticated', (req, res) => {
	res.send(req.isAuthenticated())
})

// logout 
app.post('/logout', (req, res) => {
	req.logOut()
	req.session.destroy((error) => {
		if(error) {
			console.log('Problem in destroying sessions \n', error)
		}
	})
	res.send(true)
})


// route middlewares
app.use('/vault', vaultRoutes)
app.use('/save', saveRoutes)
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)
app.use('/report_bug', reportRoutes)


// sequelize database connection instantiate
sequelize.sync()
	.then(() => {
		app.listen(config.port, () => {
		console.log("The app is listening to "+ config.port)
	})
	.catch =((error) => {
		console.log('Problem while connecting to the Database whith an error \n')
		console.log(error)
	})
})
