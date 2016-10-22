var mongoose = require("mongoose");
var Poll = require("./poll.js");
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var User = new Schema({

	id: ObjectId,
	username: String,
	firstname: String,
	lastname: String,
	phone: String,
	pollsOwned: [Poll],
	pollsSubmitted: [Poll]

});

module.exports = User;










/**uername:string
pass:
fir
last
phone
pollssowned: poll
pollssubmitted: poll**/