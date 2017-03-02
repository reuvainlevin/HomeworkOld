"use strict";

const getHttp = require('http');
var fullString = [],
    parString = "";


function getOne() {
    getHttp.get(process.argv[2], response => {
        response.setEncoding('utf8');

        response.on("err", err => {
            getTwo();
            return console.log(err);
        });
        response.on("data", data => {
            parString += data;
        });
        response.on("end", () => {
            fullString.push(parString);
            parString = "";
            getTwo();
        });
    });
}

function getTwo() {
    getHttp.get(process.argv[3], response => {
        response.setEncoding('utf8');
        response.on("err", err => {
            getThree();
            return console.log(err);
        });
        response.on("data", data => {
            parString += data;
        });
        response.on("end", () => {
            fullString.push(parString);
            parString = "";
            getThree();
        });
    });
}
function getThree() {
    getHttp.get(process.argv[4], response => {
        response.setEncoding('utf8');

        response.on("err", err => {
            return console.log(err);
        });
        response.on("data", data => {
            parString += data;
        });
        response.on("end", () => {
            fullString.push(parString);
            fullString.forEach(line => console.log(line));
        });
    });
}
getOne();






