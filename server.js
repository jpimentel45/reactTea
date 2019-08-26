const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const mongoose = require("mongoose");
const PORT = process.env.port || 5000;
const path = require('path');
//DB Config
const db = require('./config/keys').mongoURI;

const special = require('./routes/api/special');


// Route requires
const user = require('./routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

//======================================================
//                Juan
//======================================================



//body parser middleware
app.use(bodyParser.json());

//DB Config
//const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected!'))
	.catch(err => console.log(err));

//use routes
app.use('/api/special', special)

//======================================================
//                /Juan
//======================================================


// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.use((req, res, next) => {
	console.log('req.session', req.session);
	return next();
});
// Routes
app.use('/user', user)

//serve static assests if in production
if (process.env.NODE_ENV === 'production'){
	//Set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res)=>{
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	});

}

// Starting Server 
app.listen(process.env.PORT, () => console.log(`Server started on port ${PORT}`));
