/*
Dal torlese. Elotte auth, az editAuthor.js-ben leirt okok miatt
    */

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if (typeof res.tpl.song === 'undefined') {
            return next();
        }

        res.tpl.song.remove(function (err) {
            if (err) {
                return next(err);
            }

            return next();
        });
    };

};