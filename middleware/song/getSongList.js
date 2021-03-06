/*
Az osszes dalt kikeresi az adatbazisbol
*/

var requireOption = require('../common').requireOption;
var songs=false;

module.exports = function (objectrepository) {

    var songsModel = requireOption(objectrepository, 'songsModel');

    return function (req, res, next) {

        songsModel.find({

        }).exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting songs'));
            }

            res.tpl.songs = results;
            results.length > 0 ? songs = true : songs = false;
            return next();
        });
    };

};
