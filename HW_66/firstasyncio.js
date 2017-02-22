"use strict";
const fs = require('fs');

var lines = 0;

function logIt() {
    console.log(lines);
}

function readFile(callback) {
    fs.readFile(process.argv[2], 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        lines = data.split("\n").length - 1;
        logIt();
    });
}
readFile(logIt);
