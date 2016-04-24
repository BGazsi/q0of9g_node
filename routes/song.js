exports = module.exports = function(app) {

    var getSongsMW = require('../middleware/song/getSong');

    var authorModel = require('../models/authors');
    var songsModel = require('../models/songs');
    var userModel = require('../models/users');

    app.use('/songs', function (req, res) {

        var objectRepository = {
            authorModel: authorModel,
            songsModel: songsModel,
            userModel: userModel
        };

        /*var data = getSongsMW(objectRepository);
        console.log(data);*/

        var songs = [
            {title: '45-ös blues', year: '1982', performer: 'Hobo Blues Band', length: '5:31', genre: 'blues'},
            {title: 'Édes otthon', year: '1982', performer: 'Hobo Blues Band', length: '3:31', genre: 'blues'}
        ];

        var data = {songs: songs};
        res.render('songs', data);
    });
    app.use('/add-song', function (req, res) {
        res.render('addSong');
    });

    app.use('/song/:songid/add',
        //adatbmiddlewares
        function (req, res) {
            return res.redirect('/songs');

        });

    app.use('/edit-song', function (req, res) {
        //auth
        res.render('editSong');
    });

    app.use('/song/:songid/edit',
        //adatbmiddlewares
        function (req, res) {
            return res.redirect('/songs');

        });

    app.use('/song/:songid/delete',
        //auth
        //adatbmiddlewares
        function (req, res) {
            return res.redirect('/songs');
        });
};