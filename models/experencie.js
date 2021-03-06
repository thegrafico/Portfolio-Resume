//DB references
var mongoose = require("mongoose");

//experience
var experienceModel = new mongoose.Schema({
   experience: String,
   geoLocation: String,
   positionJob: String,
   contact: String,
   description: String,
   workDate: String,
   author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Experience", experienceModel);