/*
Ha van session, akkor a fooldalra redirectel
*/

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (typeof req.session.userid !== 'undefined') {
            return res.redirect('/');
        }
        return next();
    };

};