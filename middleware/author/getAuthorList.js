/*
Az osszes eloadot kikeresi az adatbazisbol
*/

var requireOption = require('../common').requireOption;
module.exports = function (objectrepository) {

    var authorModel = requireOption(objectrepository, 'authorModel');
    var songsModel = requireOption(objectrepository, 'songsModel');

    return function (req, res, next) {

        authorModel.find({

        }).exec(function (err, results) {
            if (err) {
                return next(new Error('Hiba az előadók lekérésekor'));
            }

            results.forEach(function(value, key){
                songsModel.find({'author': value.name}).exec(function(err, songResults) {
                    results[key].count = songResults.length;
                });
            });
            res.tpl.performers = results;
            return next();
        });
    };

};