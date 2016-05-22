var express = require('express');
var app     = express();
var path    = require("path");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var session = require('express-session');
var bodyParser = require('body-parser');

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'keyboard cat',
    cookie: {
        maxAge: 6000000
    },
    resave: true,
    saveUninitialized: false
}));


app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];

    return next();
});

require('./routes/outside')(app);
require('./routes/author')(app);
require('./routes/song')(app);

app.listen(3050, function() {
    console.log('Listening on :3050');
});