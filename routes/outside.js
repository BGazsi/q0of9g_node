var renderTemplateMW = require('../middleware/generic/renderTemplate');
var inverseAuthMW = require('../middleware/generic/inverseAuth');
var checkUserLoginMW = require('../middleware/user/checkUserLogin');
var checkUserRegistrationMW = require('../middleware/user/checkUserRegistration');
var getSongListMW = require('../middleware/song/getSongList');
var getAuthorListMW = require('../middleware/author/getAuthorList');

var authorModel = require('../models/authors');
var userModel = require('../models/users');
var songsModel = require('../models/songs');

exports = module.exports = function(app) {
    var objectRepository = {
        authorModel: authorModel,
        userModel: userModel,
        songsModel: songsModel
    };

    app.get('/',
        getAuthorListMW(objectRepository),
        getSongListMW(objectRepository),
        renderTemplateMW(objectRepository, 'index')
    );


    app.get('/login',
        inverseAuthMW(objectRepository),
        renderTemplateMW(objectRepository, 'login')
    );

    app.post('/login',
        inverseAuthMW(objectRepository),
        checkUserLoginMW(objectRepository),
        renderTemplateMW(objectRepository, 'login')
    );

    app.get('/register',
        inverseAuthMW(objectRepository),
        renderTemplateMW(objectRepository, 'register')
    );

    app.post('/register',
        inverseAuthMW(objectRepository),
        checkUserRegistrationMW(objectRepository),
        renderTemplateMW(objectRepository, 'login')
    );
};