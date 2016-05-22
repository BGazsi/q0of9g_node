/*
Egy eloadohoz tartozo osszes dalt megkeresi
*/
var requireOption = require('../common').requireOption;
var songs = false;

module.exports = function (objectrepository) {

    var songsModel = requireOption(objectrepository, 'songsModel');
    var authorModel = requireOption(objectrepository, 'authorModel');

    return function (req, res, next) {
        songsModel.find({
            author: res.tpl.author.name
        }).exec(function (err, results) {
            if (err) {
                return next(err);
            }
            results.length > 0 ? songs = true : songs = false;
            res.tpl.songs = results;
            return next();
        });
    };
};