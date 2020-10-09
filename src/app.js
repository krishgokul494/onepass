const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// const cors = require('cors')
const morgan = require('morgan')
// const session = require('express-session')
const session = require('cookie-session')
const {sequelize} = require('./models')
const config = require('./config')
const passport = require('passport')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))
// app.options('*', cors())
// app.use(cors({
//     origin: 'http://localhost:8080'
// }))
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", process.env.server_url || 'http://localhost:8080')
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
	res.header("Access-Control-Allow-Credentials", true)
	res.header("Access-Control-Allow-Headers", "content-type")
	next()
})
app.use(session({
	// secret: config.sessionSecret,
	// resave: false,
	// saveUninitialized: false,
	maxAge: 24*60*60*1000,
	keys: [config.sessionSecret]
  }))

require('./config/passport-setup')
app.use(passport.initialize())
app.use(passport.session())

// routes 
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')
const saveRoutes = require('./routes/save')
const vaultRoutes = require('./routes/vault')

app.get('/*/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})

app.post('/isAuthenticated', (req, res) => {
	res.send(req.isAuthenticated())
})

app.post('/logout', (req, res) => {
	req.logOut()
	req.session = null
	res.send(true)
})

app.use('/save', saveRoutes)

app.use('/vault', vaultRoutes)

app.use('/login', loginRoutes)

app.use('/register', registerRoutes)

sequelize.sync()
	.then(() => {
		app.listen(config.port, () => {
		console.log("The app is listening to "+ config.port)
	})
	.catch =((error) => {
		console.log(error)
	})
})
