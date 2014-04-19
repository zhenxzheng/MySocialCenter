//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var app = express();

//route files to load
var facebook = require('./routes/facebook')
var index = require('./routes/index');

//database setup - uncomment to set up your database
// var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/mysocialcenter');

//load environment variables
// var dotenv=require('dotenv');
// dotenv.load();

// fb.name.info({
// 	complete: function(data){
// 		console.log(data);
// 	}
// })
//add twitter api setup

//Configures the Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

//routes
app.get('/', index.view);
app.get('/auth/facebook', facebook.auth);
app.get('/UserHasLoggedIn', facebook.getFacebookInfo);
// app.get('/facebookapp', function(req,res){
// 	graph.get("zuck", function(err, res) {
//   console.log(res); // { id: '4', name: 'Mark Zuckerberg'... }
// });
// })

//set environment ports and start application
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

