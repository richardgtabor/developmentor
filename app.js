var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// var logger = require('morgan');
// var favicon = require('static-favicon');

var app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

// select middleware
// app.use(favicon);
// app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'bower_components'))); //sets content folders at the server root
app.use(bodyParser());

// define routes
app.use(require('./todos')); // path is relative to the nodejs core

// start the server
app.listen(1337, function(){
	console.log('ready on 1337');
});