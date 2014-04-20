//load environment variables
var dotenv = require('dotenv');
dotenv.load();

//facebook api setup
var graph = require('fbgraph');
var conf = {
	client_id: process.env.facebook_app_id,
	client_secret: process.env.facebook_app_secret,
	redirect_uri: process.env.facebook_app_uri,
	scope: 'email, user_about_me, user_birthday, user_location, publish_stream'
	// client_id:      '12312321312'
 //  , client_secret:  'Y123113123'
 //  , scope:          'email, user_about_me, user_birthday, user_location, publish_stream'
 //  , redirect_uri:   'http://localhost:3000/auth/facebook'
};

exports.graph = graph;
exports.conf = conf;


// var graph = require('fbgraph');
// var authUrl = graph.getOauthUrl({
// 	"client_id": process.env.facebook_app_id,
// 	"redirect_uri": process.env.facebook_app_uri	
// });

// res.redirect(authUrl);

// graph.authorize({
// 	"client_id": process.env.facebook_app_id,
// 	"redirect_uri": process.env.facebook_app_uri,
// 	"client_secret": process.env.facebook_app_secret,
// 	"code": req.query.code
// 	},
// 	function(err,facebookRes){
// 		res.redirect('/loggedIn');
// });

// // extending static access token
// graph.extendAccessToken({
//     "client_id":      process.env.facebook_app_id,
//     "client_secret":  process.env.facebook_app_secret
// }, function (err, facebookRes) {
//    console.log(facebookRes);
// });

// // extending specific access token
// graph.extendAccessToken({
//     "access_token":    client_access_token
//   , "client_id":      process.env.facebook_app_id
//   , "client_secret":  process.env.facebook_app_secret
// }, function (err, facebookRes) {
//    console.log(facebookRes);
// });


/**
//add instagram api setup
var ig = require('instagram-node-lib');
ig.set('client_id', process.env.instagram_client_id);
ig.set('client_secret', process.env.instagram_client_secret);

//export ig as a parameter to be used by other methods that require it.
exports.ig = ig;
**/