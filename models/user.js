//required DB connection
var mongoose = require("mongoose");
//autentificacion para la base de datos
var passportLocalMongoose = require("passport-local-mongoose");

//estructura en la DB
var UserSchema = new mongoose.Schema({
	username: {
		type:String,
		unique: true
	},
	password: {
		type:String,
		minlength: 5
	}
});

var userData 		= require('./data'),
	userExperience 	= require('./experencie');

// without arrow function
UserSchema.pre('remove', async function(next){

	userExperience.deleteMany({'author.id': this._id}, function(err, exp){
		console.log(exp);
	});

	userData.deleteMany({'author.id': this._id}, function(err, exp){
		console.log(exp);
	});
	next();
});

//es como un extends, ahora userSchema puede usar todos los metodos de lo que esta en ()
UserSchema.plugin(passportLocalMongoose);

//El return
module.exports = mongoose.model("User", UserSchema);