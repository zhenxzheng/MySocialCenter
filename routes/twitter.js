var auth = require('../auth');
var Twit = require('twit');

var T = new Twit({
	consumer_key: 			auth.tconf.consumer_key,
	consumer_secret: 		auth.tconf.consumer_secret,
	access_token: 			auth.tconf.access_token,
	access_token_secret: 	auth.tconf.access_token_secret
});

exports.getTweet = function(req,res) {
	var inputValue = req.body.tweet;
	console.log(inputValue);
	T.get('search/tweets',{q:inputValue, count:3}, function(err,reply){
		console.log(reply);
		data = {};
		data = {reply:reply, input:inputValue};
		//res.render('index', reply);
		res.render('index',data);
	});
}