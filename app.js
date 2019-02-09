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


//===================DB connection===================================
const dbName = 'Portfolio';
const url = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(url, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected")
  });
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
    res.send('Page not Found');
});
// --------------Addind new user----------------------
let id_ = "5c5f5e14c2219305e3e9c79f";
var author = {
    id: id_,
    username:'thegrafico'
}

// var newUser = new User({
//     username: 'thegrafico',
//     password: '123456'
// });
// newUser.save((err, user)=>{
//     if(err) return console.log(err)

//     console.log(`Added User: ${user}`  )
// });

// //REMOVE ELEMENT
User.findById(id_, (err, ele)=>{
   
    if(err) return console.log("WHERE THE FUCK IS THE FUCKING ERROR");
   
    console.log(ele)
   
    ele.remove({"_id": id_});
});


// Expe.create({
//     experience: 'Test1',
//     geoLocation: 'Where i working',
//     positionJob: 'Mannager',
//     contact: '787-377-6957',
//     description:'Tes2',
//     author
// }, (error,  expe)=>{

//     if(error) return console.log(error);
    
//     var newData = new Data({
//         author,
//         introduction: 'HOLA SOY RAUL',
//         experience: expe
//     })
//     newData.save((err, dataUser) =>{
//         if (err) return console.log(err);
    
//         console.log('Added Data: ' + dataUser)
//     }); 
// });




// dExpe.save((err, dataUser) =>{
//         if (err) return console.log(err);
//         console.log('Added Data: ' + dataUser)
//     });
// var newData = new Data({
//     author,
//     introduction: 'HOLA SOY RAUL',
//     experience: dExpe
// })

// newData.experience.push(dExpe);

// newData.save((err, dataUser) =>{
//     if (err) return console.log(err);

//     console.log('Added Data: ' + dataUser)
// });

const port = 3000;
/* === Export all of the functionality. === */
app.listen(port, function(){
	console.log(`Server Init on port ${port}`);
});

