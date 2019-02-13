//Imports
const express           = require('express'),
        path            = require('path'),
        bodyParser      = require('body-parser'),
        passport        = require('passport'),
        LocalStrategy   = require('passport-local'),
        User            = require('./models/user'),
        Data            = require('./models/data'),
        Expe            = require('./models/experencie'),
        mongoose 		= require("mongoose"), 
        hbs             = require('hbs');
//App
var app = express();

const port = process.env.PORT || 3000;

//===================DB connection===================================
const dbName = 'Portfolio';
const url = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(process.env.MONGODB_URI || url, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log("Connected");});
//============================================================
//Setup HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials/')

/* === Setup === */
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


//======================User Security==============
app.use(require("express-session")({
	secret: "Thegrafico is a cool guy",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

//Esta usando los metodos que hereda USER
passport.use(new LocalStrategy(User.authenticate()));

//encriptar datos
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//this is a midleware tha run in every route.
app.use(function(req, res, next){
	//every route got accest to variable currentUser
	res.locals.currentUser = req.user;
	
	next();
});
//===========================ROUTES=====================
var resume      = require('./routes/resume'),
    portfolio   = require('./routes/portfolio');

//using routes
app.use('/', portfolio);
app.use('/resume', resume);

//=====Default route=====
app.get('*', (req, res) =>{
    res.send("The 'Not page found' is under development");
});

/* === Export all of the functionality. === */
app.listen(port, function(){
	console.log(`Server Init on port ${port}`);
});

