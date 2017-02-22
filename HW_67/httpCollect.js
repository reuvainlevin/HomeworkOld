"use strict";

const getHttp = require('http'),
    getBl = require('bl');

/*getHttp.get(process.argv[2], response => {
    response.setEncoding('utf8');
    response.pipe(getBl, (err, data) => {
        if (err) return console.error(err);
        console.log(data.length);
        console.log(data);
    });
});*/


var lineCount = 0,
    fullString = "";

getHttp.get(process.argv[2], response => {
    response.setEncoding('utf8');
    response.on("data", data => {
        lineCount += data.length;
        fullString += data;
    });
    response.on("end", () => {
        console.log(lineCount);
        console.log(fullString);
    });
});


