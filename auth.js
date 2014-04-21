//load environment variables
var dotenv = require('dotenv');
dotenv.load();

//facebook api setup
var graph = require('fbgraph');
var conf = {
	client_id: 		process.env.facebook_app_id,
	client_secret: 	process.env.facebook_app_secret,
	redirect_uri: 	process.env.facebook_app_uri,
	scope: 			'email, user_about_me, user_birthday, user_location, publish_stream'	
};

var tconf = {
	consumer_key: 			process.env.twitter_api_key,
	consumer_secret: 		process.env.twitter_api_secret,
	access_token: 			process.env.twitter_access_token,
	access_token_secret: 	process.env.twitter_access_token_secret,
	callbackURL: 			process.env.twitter_callback_url
}
exports.graph = graph;
exports.conf = 	conf;
exports.tconf = tconf;





/**
//add instagram api setup
var ig = require('instagram-node-lib');
ig.set('client_id', process.env.instagram_client_id);
ig.set('client_secret', process.env.instagram_client_secret);

//export ig as a parameter to be used by other methods that require it.
exports.ig = ig;
**/