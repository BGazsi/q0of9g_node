var db = require('../config/db');

var Songs = db.model('Songs', {
    author: String,
    title: String,
    length: String,
    genre: String,
    year: Number
});

module.exports = Songs;
