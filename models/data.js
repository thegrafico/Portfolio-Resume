//DB references
var mongoose = require("mongoose");


//estructura
var dataSchema = new mongoose.Schema({
	author: {
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	},
    experience: [
		{
		   type: mongoose.Schema.Types.ObjectId,
		   ref: "Experience"
		}
	 ],
    introduction: String
});

//our model to manipulate the DB
var DataDB = mongoose.model("Data", dataSchema);

module.exports = DataDB;	