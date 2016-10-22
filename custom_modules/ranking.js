var mongoose = require('mongoose');
var User = require('./user.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var Ranking = new Schema({
	id : ObjectId,
	user : User,
	date : {
		type : Date,
		default : Date.now
	},
	ranking : [String]
});

module.exports = Ranking;