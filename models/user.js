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

//es como un extends, ahora userSchema puede usar todos los metodos de lo que esta en ()
UserSchema.plugin(passportLocalMongoose);


//El return
module.exports = mongoose.model("User", UserSchema);