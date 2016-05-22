
var getSongsMW = require('../middleware/song/getSong');
var getOneSongMW = require('../middleware/song/getOneSong');
var getSongListMW = require('../middleware/song/getSongList');
var authMW = require('../middleware/generic/auth');
var updateSongMW = require('../middleware/song/updateSong');
var deleteSongMW = require('../middleware/song/deleteSong');
var renderTemplateMW = require('../middleware/generic/renderTemplate');
var getAuthorMW = require('../middleware/author/getAuthor');
var editAuthorMW = require('../middleware/author/editAuthor');

var authorModel = require('../models/authors');
var songsModel = require('../models/songs');
var userModel = require('../models/users');

exports = module.exports = function(app) {

    var objectRepository = {
        'authorModel': authorModel,
        'songsModel': songsModel,
        'userModel': userModel
    };

    app.use('/songs/:authorname',
        getAuthorMW(objectRepository),
        getSongsMW(objectRepository),
        renderTemplateMW(objectRepository, 'songs')
    );
    app.use('/add-song',
        authMW(objectRepository),
        renderTemplateMW(objectRepository, 'addSong')
    );

    app.use('/song/add',
        authMW(objectRepository),
        updateSongMW(objectRepository),
        renderTemplateMW(objectRepository, 'songs')
    );

    app.use('/edit-song/:songid',
        authMW(objectRepository),
        getOneSongMW(objectRepository),
        renderTemplateMW(objectRepository, 'editSong')
    );

    app.use('/song/:songid/edit',
        authMW(objectRepository),
        getOneSongMW(objectRepository),
        updateSongMW(objectRepository),
        function (req, res) {
            return res.redirect('/songs');
        });

    app.use('/song/:songid/delete',
        authMW(objectRepository),
        getOneSongMW(objectRepository),
        deleteSongMW(objectRepository),
        getSongListMW(objectRepository),
        function (req, res) {
            return res.redirect('/');
        }
    );
};