const fs = require('fs'), arg2 = process.argv[2], arg3 = process.argv[3], len = process.argv[3].length;

fs.readdir(arg2, 'utf8', (err, list) => {
    if (err) return console.error(err);

    list.forEach(item => {
        if (item.charAt(item.length - (len + 1)) == "." && item.substr(-len) == arg3) console.log(item);
    });
});
