/*
Megnezi, hogy van-e session, ha nincs, akkor a /loginra redirectel
*/

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (typeof req.session.userid === 'undefined') {
            return res.redirect('/login');
        }
        return next();
    };

};