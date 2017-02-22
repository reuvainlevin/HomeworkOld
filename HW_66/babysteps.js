"use strict";
var total = 0,
    i = 2;
for (i; i < process.argv.length; i++) {
    total += (+process.argv[i]);
}

console.log(total);