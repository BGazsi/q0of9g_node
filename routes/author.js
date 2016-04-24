exports = module.exports = function(app) {
    var authorModel = require('../models/authors');

    app.use('/performers', function (req, res) {

        var performers = [
            { name: 'Hobo Blues Band', count: 2}
        ];

        var data = {performers: performers};
        res.render('performers', data);
    });
    app.use('/add-author', function (req, res) {
        //auth
        res.render('addAuthor');

    });

    app.use('/author/add',
        //adatbmiddlewares
        function (req, res) {
            return res.redirect('/performers');

    });

    app.use('/edit-author', function (req, res) {
        //auth
        res.render('editAuthor');
    });

    app.use('/author/:authorid/edit',
        //adatbmiddlewares
        function (req, res) {
            return res.redirect('/performers');

    });

    app.use('/author/:authorid/delete',
        //auth
        //adatbmiddlewares
        function (req, res) {
            return res.redirect('/performers'); });
};