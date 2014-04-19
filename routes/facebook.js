var auth = require('../auth');
var graph = auth.graph;
var conf = auth.conf;

exports.auth = function(req, res) {
	// we don't have a code yet
	// so we'll redirect to the oauth dialog
	if (!req.query.code) {
	var authUrl = graph.getOauthUrl({
		"client_id":     auth.conf.client_id,
	    "redirect_uri":  auth.conf.redirect_uri,
	    "scope":         auth.conf.scope
	});
	if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
		res.redirect(authUrl);
	}
	else {  //req.query.error == 'access_denied'
		res.send('access denied');
	}
	return;
	}

	// code is set
	// we'll send that and get the access token
	graph.authorize({
		"client_id":      auth.conf.client_id,
	 	"redirect_uri":   auth.conf.redirect_uri,
		"client_secret":  auth.conf.client_secret,
	  	"code":           req.query.code
		}, 
		function (err, facebookRes) {
		res.redirect('/UserHasLoggedIn');
	});
}

exports.getFacebookInfo = function(req,res) {
		//var data;
		var params = { fields: "username,id,birthday,gender,picture"};
		graph.get("me", params, function(err, response) {
		//	data = {response: response, foo: 'bar'};
		//	data = response;
			console.log(response);
	  		// console.log(data); // { picture: 'http://profile.ak.fbcdn.net/'... }
	  		res.render('index', {response:response, loggedin: true});
		});
	// console.log(data);
	// res.render("facebook", data);
}