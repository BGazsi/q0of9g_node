exports = module.exports = function(app) {

    app.get('/songs', function (req, res) {

        var songs = [
            {title: '45-�s blues', year: '1982', performer: 'Hobo Blues Band', length: '5:31', genre: 'blues'},
            {title: '�des otthon', year: '1982', performer: 'Hobo Blues Band', length: '3:31', genre: 'blues'}
        ];

        var data = {songs: songs};
        res.render('songs', data);
    });
};