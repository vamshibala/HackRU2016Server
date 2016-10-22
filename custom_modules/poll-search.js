var PollSchema = mongoose.require('./poll.js');

var Poll = mongoose.model('Poll',PollSchema);

var pollSearch = function(keywords) {
	Poll.find().where('keywords').in(keywords).sort({date : 'desc'})
		.exec(function(error,polls) {
			if (error) return null;
			else return polls;
		});
}

module.exports = pollSearch;