var express = require('express');
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

require('./routes/outside')(app);
require('./routes/author')(app);
require('./routes/song')(app);

app.listen(3000, function() {
    console.log('Listening on :3000');
});