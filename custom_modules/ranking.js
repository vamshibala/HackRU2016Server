var mongoose = require('mongoose');
var User = require('./user.js');
var Schema = mongoose.Schema;

var Ranking = new Schema({

	user : User,
	date : {
		type : Date,
		default : Date.now
	},
	ranking : [String]
});

module.exports = Ranking;