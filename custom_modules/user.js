var mongoose = require("mongoose");
var Poll = require("./poll.js");
var Schema = mongoose.Schema;

var User = new Schema({

	username: String,
	firstname: String,
	lastname: String,
	password: String,
	phone: String,
	pollsOwned: [Poll],
	pollsSubmitted: [Poll]

});

module.exports = User;







