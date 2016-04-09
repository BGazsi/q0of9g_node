exports = module.exports = function(app) {

    app.get('/', function (req, res, next) {

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
        res.render('index', data);
        return next();
    });


    app.get('/login', function (req, res) {
        res.render('login');
    });
};