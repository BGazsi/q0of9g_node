var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Songs = db.model('Songs', {
    _author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    title: String,
    length: String,
    genre: String,
    year: { type: Number, min: 0, max: 2016 }
});

module.exports = Songs;
