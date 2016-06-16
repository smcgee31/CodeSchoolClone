// Require dependencies
var express = require('express');
var bodyParser = require('body-parser');


// initilize app
var app = express();

app.use(express.static(__dirname + './../public'));

// initilize dependencies
app.use(bodyParser.json());


// Variables
var port = 6000;
var mongoURI = 'mongodb://localhost:27017/DBName';

// MongoDB connection
// App Listen
app.listen(port, function() {
    console.log('listening on port ', port);
});
