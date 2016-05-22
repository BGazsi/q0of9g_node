/*
Belepeskor eldonti, hogy a belepes sikeres volt-e
*/

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {

        //hianyzo adatok
        if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            return next();
        }

        //user megkeresese
        userModel.findOne({
            email: req.body.email
        }, function (err, result) {
            if ((err) || (!result)) {
                res.tpl.error.push('Nincs ilyen felhasználó!');
                return next();
            }

            //jelszo ellenorzes
            if (result.password !== req.body.password) {
                res.tpl.error.push('Hibás jelszó!');
                return next();
            }

            //ha sikeres a bejelentkezes, akkor elmentjuk a felhasznalot a sessionbe
            req.session.userid = result._id;
            
            return res.redirect('/');
        });
    };

};
