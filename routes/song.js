exports = module.exports = function(app) {

    app.use('/songs', function (req, res) {

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

    app.use('/edit-song', function (req, res) {
        //auth
        res.render('editSong');
    });

    app.use('/delete-song', function (req, res) {
        //auth
        //delete
    });
};