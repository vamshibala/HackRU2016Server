var mongoose = require('mongoose');
var _ = require('underscore');
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

Poll.methods.renderStats = function() {
	var mapping = {};
	_.each(this.list,function(item) {
		mapping[item] = {sum:0,num:0};
	});
	_.each(this.rankings,function(ranking) {
		for (var i = 0; i < ranking.ranking.length; i++) {
			var item = ranking.ranking[i];
			if (mapping.hasOwnProperty(item)) {
				mapping[item].sum+=i;
				mapping[item].num++;
			}
		}
	});
	return _.sort(_.pairs(mapping),function(iteratee) {
		return iteratee[1].sum/iteratee[1].num;
	});
};

module.exports = Poll;