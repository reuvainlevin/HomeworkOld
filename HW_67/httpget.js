"use strict";

const getHttp = require('http');

getHttp.get(process.argv[2], response => {
    response.setEncoding('utf8');
    response.on("data", data => console.log(data));
});


