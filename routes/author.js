exports = module.exports = function(app) {

    app.get('/performers', function (req, res) {

        var performers = [
            { name: 'Hobo Blues Band', count: 2}
        ];

        var data = {performers: performers};
        res.render('performers', data);
    });
};