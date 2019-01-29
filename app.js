const express       = require('express'),
        path        = require('path'),
        bodyParser   = require('body-parser')
        hbs         = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials/')

/* === Setup === */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


//Importing routes
var resume = require('./routes/resume');

//using routes
app.use('/resume', resume)
//=====Default route=====
app.get('*', (req, res) =>{
    res.send('Page not Found');
} )

const port = 3000;
/* === Export all of the functionality. === */
app.listen(port, function(){
	console.log(`Server Init on port ${port}`);
});
