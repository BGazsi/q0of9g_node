/*
Egy eloadohoz tartozo osszes dalt megkeresi
*/
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var songsModel = requireOption(objectrepository, 'songsModel');

    return function (req, res, next) {
        songsModel.findOne({
            _id: req.param('songid')
        }).exec(function (err, result) {
            if (err) {
                return next(err);
            }
            res.tpl.song = result;
            return next();
        });
    };
};