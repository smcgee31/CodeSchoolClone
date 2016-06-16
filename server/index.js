var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var port = 6000;
app.listen(port, function() {
    console.log('listening on port ', port);
});
