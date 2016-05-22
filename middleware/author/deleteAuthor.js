/* 
Eloado torlese
*/

module.exports = function (objectrepository) {
    return function (req, res, next) {

        if (typeof res.tpl.author === 'undefined') {
            return next();
        }

        res.tpl.author.remove(function (err) {
            if (err) {
                return next(err);
            }

            res.redirect('/performers');
        });
    };

};
