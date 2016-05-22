/*
ID alapjan kikeresi egy eloado adatait az adatbazisbol
*/

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var authorModel = requireOption(objectrepository, 'authorModel');

    return function (req, res, next) {

        authorModel.findOne({
            name: req.param('authorname')
        }).exec(function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/performers');
            }
            res.tpl.author = result;
            return next();
        });
    };

};