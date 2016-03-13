var express = require('express');
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.get('/', function(req, res){
/*
var performers = [
    {name: 'Hobo Blues Band'},
    {name: 'Ed Sheeran'},
    {name: 'Jimmy Hendrix'}
  ];

  var songs = [
    {title: '45-ös blues', year: '1982', performer: 'Hobo Blues Band', length: '5:31', genre: 'blues'},
    {title: 'Foxy Lady', year: '1970', performer: 'Jimmy Hendrix', length: '2:28', genre: 'blues'},
    {title: 'Sing', year: '2013', performer: 'Ed Sheeran', length: '4:27', genre: 'pop'},
    {title: 'Édes otthon', year: '1982', performer: 'Hobo Blues Band', length: '3:31', genre: 'blues'}
  ];

  var data = {
    performers: performers,
    songs: songs
  };
  res.render('index', data);*/
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/songs', function(req, res) {
/*
    var songs = [
        {title: '45-ös blues', year: '1982', performer: 'Hobo Blues Band', length: '5:31', genre: 'blues'},
        {title: 'Édes otthon', year: '1982', performer: 'Hobo Blues Band', length: '3:31', genre: 'blues'}
    ];

    var data = {songs: songs};
    res.render('songs', data);*/
    res.sendFile(path.join(__dirname+'/views/songs.html'));
});

app.get('/performers', function(req, res) {
/*
    var songs = [
        {title: '45-ös blues', year: '1982', performer: 'Hobo Blues Band', length: '5:31', genre: 'blues'},
        {title: 'Édes otthon', year: '1982', performer: 'Hobo Blues Band', length: '3:31', genre: 'blues'}
    ];

    var data = {songs: songs};
    res.render('performers', data);*/
    res.sendFile(path.join(__dirname+'/views/performers.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname+'/views/login.html'));
});

app.listen(3000);