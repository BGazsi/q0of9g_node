/*
Eloado hozzaadasa / szerkesztese, attol fuggoen, hogy szerepel-e
mar az id-ja az adatbazisban

Kell elotte egy auth, mert az oldal ugy fog mukodni, hogy a listat mindenki
megnezheti, de csak sessionnel rendelkezo felhasznalo szerkesztheti.
Ha nincs bejelentkezve, akkor a modalban a login fog megjelenni remote-osan.*/

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var authorModel = requireOption(objectrepository, 'authorModel');
    var songsModel = requireOption(objectrepository, 'songsModel');

    function saveCallback(req, res, next, author) {
        author.save(function (err, result) {
            if (err) {
                return next(err);
            }
            if(!req.body.newtitle) {
                return res.redirect('/performers');
            }

            else return next();
        });
    }

    return function (req, res, next) {
        if (typeof req.body.newauthor === 'undefined') {
            return next();
        }

        var author = undefined;
        if (typeof res.tpl.author !== 'undefined') {
            author = res.tpl.author;
            var oldname = res.tpl.author.name;
            //frissitjuk a hozza tartozo dalok eloadoit, ronda af
            songsModel.find(
                {author: oldname}
            ).exec(function(err, results) {
                results.forEach(function(value, key) {
                    value.author = req.body.newauthor;
                    value.save(function(err, result) {
                        //next();
                    });
                });
            });

            author.name = req.body.newauthor;

            return saveCallback(req, res, next, author);

        } else {
            author = new authorModel();
            author.name = req.body.newauthor;
            return saveCallback(req, res, next, author);
        }
    }
};
