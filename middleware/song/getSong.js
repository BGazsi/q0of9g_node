/*
Egy dalt ID alapjan kikeres az adatbazisbol, es betolti az adatait
*/
var requireOption = require('../common').requireOption;
module.exports = function (objectrepository) {

    var songsModel = requireOption(objectrepository, 'songsModel');

    return function (req, res, next) {
        var song = songsModel.findOne();
        console.log(song);
        return next();
    }
};