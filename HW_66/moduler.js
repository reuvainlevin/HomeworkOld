"use strict";
const fs = require('fs'),
    path = require('path');


module.exports = function (dir, ext, callback) {
    fs.readdir(dir, 'utf8', (err, files) => {
        ext = '.' + ext;
        if (err) return callback(err);

        callback(null, files.filter(f => path.extname(f) === ext));
    });
};