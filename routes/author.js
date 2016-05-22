var authMW = require('../middleware/generic/auth');

var getAuthorListMW = require('../middleware/author/getAuthorList');
var getAuthorMW = require('../middleware/author/getAuthor');
var editAuthorMW = require('../middleware/author/editAuthor');
var deleteAuthorMW = require('../middleware/author/deleteAuthor');
var renderTemplateMW = require('../middleware/generic/renderTemplate');

var authorModel = require('../models/authors');
var songsModel = require('../models/songs');
var userModel = require('../models/users');

exports = module.exports = function(app) {

    var objectRepository = {
        authorModel: authorModel,
        userModel: userModel,
        songsModel: songsModel
    };

    app.get('/performers',
        getAuthorListMW(objectRepository),
        renderTemplateMW(objectRepository, 'performers')
    );

    app.get('/add-author',
        authMW(objectRepository),
        renderTemplateMW(objectRepository, 'addAuthor')
    );

    app.post('/author/add',
        editAuthorMW(objectRepository),
        
        function(req, res) {
            return res.redirect('/performers')
        }
    );

    app.get('/edit-author/:authorname',
        authMW(objectRepository),
        getAuthorMW(objectRepository),
        renderTemplateMW(objectRepository, 'editAuthor')
    );

    app.use('/author/:authorname/edit',
        authMW(objectRepository),
        getAuthorMW(objectRepository),
        editAuthorMW(objectRepository),

        function (req, res) {
            return res.redirect('/performers');

    });

    app.use('/author/:authorname/delete',
        authMW(objectRepository),
        getAuthorMW(objectRepository),
        deleteAuthorMW(objectRepository),

        function (req, res) {
            return res.redirect('/performers');
        });
};