/*
Dal hozzaadasa / szerkesztese
*/

var requireOption = require('../common').requireOption;

module.exports = function (objectRepository) {

    var songsModel = requireOption(objectRepository, 'songsModel');
    var authorModel = requireOption(objectRepository, 'authorModel');

    function saveCallback(res, next, song) {
        song.save(function (err, result) {
            if (err) {
                return next(err);
            }
            if(res.tpl.author) {
                return res.redirect('/author/' + res.tpl.author.name);
            } else {
                return res.redirect('/');
            }
        });
    }

    return function (req, res, next) {

        if (typeof req.body.newtitle === 'undefined') {
            return next();
        }

        authorModel.findOne({
            name: req.body.newauthor
        }).exec(function(err, result) {
            if(result == null) {
                author = new authorModel();
                author.name = req.body.newauthor;
                author.save();
            }
        });

        var song = undefined;
        if (typeof res.tpl.song !== 'undefined') {
            song = res.tpl.song;
            song.title = req.body.newtitle;
            song.author = req.body.newauthor;
            song.genre = req.body.newgenre;
            song.length = req.body.newlength;
            song.year = req.body.newyear;

            return saveCallback(res, next, song);

        } else {
            song = new songsModel();
            song.title = req.body.newtitle;
            song.author = req.body.newauthor;
            song.genre = req.body.newgenre;
            song.length = req.body.newlength;
            song.year = req.body.newyear;

            return saveCallback(res, next, song);
        }
    }
};
