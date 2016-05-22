/*
ID alapjan keres usert
*/

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel2');

    return function (req, res, next) {
        //nincs eleg parameter
        if ((typeof req.param('userid') === 'undefined') || (req.param('userid') === 'null')) {
            return next();
        }

        //egyebkent megkeressuk a usert
        userModel.findOne({_id: req.param('userid')}, function (err, result) {
            if (err) {
                return next(err);
            }

            res.tpl.user = result;

            return next();
        });

    };

};