//DB references
var mongoose = require("mongoose");


//Skill
var skillData = new mongoose.Schema({
    sk: [{skill: String, percent: Number}]
})


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
    introduction: String,
    education: [{where:  String, geoLocation: String, title: String}],
    favClass: []
});

//our model to manipulate the DB
var DataDB = mongoose.model("Data", dataSchema);

module.exports = DataDB;	