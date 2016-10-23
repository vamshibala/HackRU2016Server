var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/HackRU2016Server");

var _ = require('underscore');
var UserSchema = require("./custom_modules/user.js");
var pollSearch = require('./custom_modules/poll-search.js');
var RankingSchema = require('./custom_modules/ranking.js');
var PollSchema = require('./custom_modules/poll.js');
var app = express();
var port = 3000;
var Ranking = mongoose.model('Ranking',RankingSchema);
var Poll = mongoose.model('Poll',PollSchema);
var User = mongoose.model("Users", UserSchema);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/REST/signup", function(req, res){
	
	User.create(req.body, function(err, user){
		
		if(err){
		
			res.sendStatus(404);
			
		}else{
		
			res.send("Success");
				
		}
		
	});

});

app.get("/REST/login", function(req, res){	
	
	User.findOne(req.body, function(err, user){
	
		if(err){
		
			res.sendStatus(404);
		
		}else{

			res.send("Success");
		
		}
	
	});

});


app.get('/REST/search', function(req,res){
	res.send(_.map(pollSearch(req.body.keywords),function(poll){
		return {
			owner : poll.owner.username,
			title : poll.title,
			date : poll.date
		}
	}));
});

app.post('/REST/ranking', function(req,res){
	// GET A RANKING JSON, STORE
	var ranking = req.body;
	Ranking.create(ranking,function(err,rankingFromDB){
		if (err) res.sendStatus(404);
		else {
			res.send('OK');
		}
	});
});

app.get('/REST/poll', function(req,res){
	
	Poll.findOne(req.body, function(err, poll){
	
		if(err){
		
			res.sendStatus(404);
		
		} else {
		
			res.send(poll);
		
		}
	
	});
	
});

app.post('/REST/poll', function(req,res){
	
	Poll.create(req.body, function(err, poll){
	
		if(err){
		
			res.sendStatus(404);
		
		}else{
		
			res.send("Success");
		
		}
	
	});
	
});

app.listen(port, function(){

	console.log("Server is running on port: " + port);

});