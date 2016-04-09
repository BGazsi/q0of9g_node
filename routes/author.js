exports = module.exports = function(app) {

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

    app.use('/edit-author', function (req, res) {
        //auth
        res.render('editAuthor');
    });

    app.use('/delete-author', function (req, res) {
        //auth
        //delete
    });
};