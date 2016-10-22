var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var pollSearch = require('./poll-search.js');
var RankingSchema = require('./ranking.js');
var app = express();
var port = 3000;

var Ranking = mongoose.model('Ranking',RankingSchema);

app.use(bodyParser);

app.get("/", function(req, res){

	res.send("This is the home page");

});




app.listen(port, function(){

	console.log("Server is running on port: " + port);

});

// ONLY HARAN'S CHANGES PAST THIS POINT

app.get('/REST/search', function(req,res){
	res.send(pollSearch(req.body.keywords));
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
	
});

app.post('/REST/poll', function(req,res){
	
});