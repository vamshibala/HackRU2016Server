var mongoose = require('mongoose');
var User = require('./user.js');
var Ranking = require('./ranking.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var Poll = new Schema({
	id : ObjectId,
	owner : User,
	date : {
		type : Date,
		default : Date.now
	},
	title : String,
	list : [String],
	rankings : [Ranking],
	keywords : [String]
});

module.exports = Poll;