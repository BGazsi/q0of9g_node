/**
 * Created by Bence on 2016. 04. 24..
 */

var db = require('../config/db');

var Author = db.model('Author', {
    name: String
});

module.exports = Author;
