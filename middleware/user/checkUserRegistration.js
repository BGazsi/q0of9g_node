/*
Regisztracio

Ellenorizni, hogy regisztralt-e mar, ha nem, akkor regisztalni
az adatbazisban
*/

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var UserModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {

        //not enough parameter
        if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            return next();
        }

        //lets find the user
        UserModel.findOne({
            email: req.body.email
        }, function (err, result) {
            if ((err) || (result !== null)) {
                res.tpl.error.push('Ez az e-mail cím már regisztrálva van!');
                return res.redirect('/register');
            }

            //create user
            var newUser = new UserModel();
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.save(function (err) {
                //redirect to /login
                return res.redirect('/login');
            });
        });
    };
};
